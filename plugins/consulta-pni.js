import axios from 'axios';

const handler = async (m, { conn, args, command, usedPrefix }) => {
    if (!args[0]) {
        throw `*[❗𝐈𝐍𝐅𝐎❗] Insira um CPF para consultar. Exemplo: ${usedPrefix + command}* 07068093868`;
    }
    
    const cpf = args[0].replace(/\D/g, '');

    if (cpf.length !== 11) {
        throw `*[❗𝐄𝐑𝐑𝐎❗] CPF inválido. Por favor, insira um CPF com 11 dígitos.*`;
    }

    m.reply(`*✅ Consultando CPF, por favor aguarde um momento...*`);

    try {
        const { data: json } = await axios.get(`https://apis.ngrok.app/apis/si-pni/api.php?key=@BINGSIXBOT&cpf=${cpf}`);
        const record = json?.pessoal?.records?.[0];

        if (!record) {
            throw new Error('Dados não encontrados');
        }

        const {
            nome = 'Nome não encontrado',
            cnsDefinitivo,
            cnsProvisorio,
            dataNascimento,
            sexo,
            identidadeGenero,
            nomeMae,
            nomePai,
            tipoSanguineo,
            grauQualidade,
            ativo,
            obito,
            partoGemelar,
            vip,
            racaCor,
            estadoCivil,
            escolaridade,
            nacionalidade,
            endereco,
            foraDeArea
        } = record;

        let caption = `\`\`\`    - CONSULTA DE CPF VIA PNI - \n\n[*] Dados Gerais [*] \n\n`;
        caption += `Nome: ${nome} \n\n`;
        caption += `CNS Definitivo: ${cnsDefinitivo}\n\n`;
        if (cnsProvisorio && cnsProvisorio.length > 0) {
            caption += `CNS Provisório: ${cnsProvisorio.join(', ')} \n\n`;
        }
        if (dataNascimento) caption += `Data de Nascimento: ${dataNascimento}\n\n`;
        if (sexo) caption += `Sexo: ${sexo}\n\n`;
        if (identidadeGenero) caption += `Identidade de Gênero: ${identidadeGenero}\n\n`;
        if (nomeMae) caption += `Nome da Mãe: ${nomeMae}\n\n`;
        if (nomePai) caption += `Nome do Pai: ${nomePai}\n\n`;
        if (tipoSanguineo) caption += `Tipo Sanguíneo: ${tipoSanguineo}\n\n`;
        if (grauQualidade) caption += `Grau de Qualidade: ${grauQualidade}\n\n`;
        caption += `Ativo: ${ativo}\n\n`;
        caption += `Óbito: ${obito}\n\n`;
        caption += `Parto Gemelar: ${partoGemelar}\n\n`;
        caption += `VIP: ${vip}\n\n`;
        if (racaCor) caption += `Raça/Cor: ${racaCor}\n\n`;
        if (estadoCivil) caption += `Estado Civil: ${estadoCivil}\n\n`;
        if (escolaridade) caption += `Escolaridade: ${escolaridade}\n\n`;
        if (nacionalidade) {
            caption += `Nacionalidade: ${nacionalidade.nacionalidade}, Município de Nascimento: ${nacionalidade.municipioNascimento}, País de Nascimento: ${nacionalidade.paisNascimento}\n\n`;
        }
        if (endereco) {
            const { tipoEndereco, logradouro, numero, complemento, bairro, municipio, siglaUf, pais, cep } = endereco;
            caption += `\n[*] Endereço [*]\n`;
            caption += ` Logradouro: ${logradouro}\n Bairro: ${bairro}\n Complemento:${complemento || ''}\n Numero: ${numero}\n Municipio${municipio}\n UF: ${siglaUf}\n País: ${pais}\n CEP: ${cep || ''}\n\n`;
        }
        if (foraDeArea) caption += `Fora de Área: ${foraDeArea}\n\n`;

        if (json.calendario && json.calendario.record && json.calendario.record.imunizacoesCampanha) {
            const { imunobiologicos } = json.calendario.record.imunizacoesCampanha;
            caption += `\n[*] Histórico de Vacinação [*]\n`;
            imunobiologicos.forEach(vaccine => {
                caption += `Vacina: ${vaccine.nome}\n\n`;
                vaccine.imunizacoes.forEach(imunizacao => {
                    caption += `  - Data de Aplicação: ${imunizacao.dataAplicacao}\n\n`;
                    caption += `  - Dose: ${imunizacao.esquemaDose.tipoDoseDto.descricao}\n\n`;
                    caption += `  - Estabelecimento: ${imunizacao.nomeEstabelecimentoSaude}\n\n`;
                    caption += `  - Profissional: ${imunizacao.nomeProfissionalSaude}\n\n`;
                    caption += `  - Lote: ${imunizacao.lote}\n\n`;
                    caption += `  - Fabricante: ${imunizacao.fabricante}\n\n`;
                    caption += `  - Campanha: ${imunizacao.nomeCampanha}\n\n`;
                    caption += `  - Grupo de Atendimento: ${imunizacao.descricaoGrupoAtendimento}\n\n`;
                });
            });
        }

        caption += `\`\`\``;

        await conn.sendMessage(m.chat, { text: caption }, { quoted: m });
    } catch (error) {
        console.error('Error:', error);
        throw `CPF não encontrado`;
    }
};

handler.command = /^(chkpni|pni|cpfpni|consultarpni|consultapni|vacina)$/i;
export default handler;

