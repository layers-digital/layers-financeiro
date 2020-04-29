const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }))

//Request payload
// {
//   "context": {
//     "issuedAt": Date,  // Quando a chamada foi feita
//     "action": '@layers:payments:Payables:getRelated',
//     "community": String,  // Comunidade do usuário
//   },
//   "data": {
//     "user": {
//       "id": String,  // ID do usuário
//       "name": String,  // Nome do usuário
//       "email": String,  // Email do usuário
//       "alias": String | Number | null,  // Alias do usuário
//     },
//   },
//   "secret": String, // Chave secreta
// }

let mockedData = {
  "result": [
    // Grupo de cobranças
    {

      // ID interno do grupo de cobranças, para possível fetch individual futuro
      id: "RA",

      // Título do grupo de cobranças. Pode ser o nome do aluno, ou como preferirem que apareça este "grupo"
      title: "Aluno Munir Seduca",

      // Descrição do grupo de cobranças (aceita Quebras de linha)
      description: "Responsável Financeiro: ...\n...",

      // Qual é o número total de parcelas (por padrão, será a contagem de payables)
      installments: 12,

      // Lista de cobranças que fazem parte desse grupo
      payables: [
        {

          // ID interno da cobrança no ERP, para possível futura integração
          id: "ID_DA_COBRANÇA",

          // Identificador personalizado da cobrança (opcional, será vísivel na Interface)
          alias: "3213",

          // Qual é o número da parcela dessa cobrança?
          installment: 1,

          // Descrição da cobrança (aceita markdown)
          description: "Mensalidade referente ao mês de Janeiro de 2020",

          // Status da cobrança, valores possíveis:
          // paid: Pago
          // partially_paid: Parcialmente Pago
          // pending: Aguardando Pagamento
          // open: Em Aberto
          // canceled: Cancelado
          // late: Atrasado
          status: "pending",

          // Data de vencimento da cobrança (formato AAAA-MM-DD)
          dueAt: "2020-02-01",

          // Quando a cobrança foi paga (opcional. formato AAAA-MM-DD)
          paidAt: null,

          // Quando a cobrança foi enviada (opcional. formato AAAA-MM-DD)
          sentAt: null,

          // Valor que já foi pago
          centsPaid: 0,

          // Valor total a ser pago (com multas/taxas, se aplicável)
          centsTotal: 150000,

          // Valor original (sem multas/taxas)
          centsOriginal: 150000,

          boleto: {

            // Link para baixar o boleto
            link: "https://boleto.pdf", //URL,

            // Linha digitável do boleto, será usada para o usuário copiar o código sem ter que baixar o boleto
            code: "12341234123412341234",
          },

          // Lista de anexos da cobrança (opcional)
          attachments: [
            {

              // Tipo do anexo
              // Valores possivels:
              // invoice: Nota fiscal
              // file: Arquivo
              kind: 'file',

              // Nome do anexo
              title: "Comprovante de estorno",

              // Descrição do anexo
              description: "Estorno realizado em 31/10/2019",

              // Link para baixar o anexo
              url: "https://url.para-download.com",
            },
          ]
        }
      ]
    }
  ]
}

app.get('/', function (req, res) {
  //Validate token

  //get user info

  //get layers secret
  const secret = functions.config().layers.secret

  if(!secret) {
    res.status(500).send({error: `secret not found`})
	}

  //Mount request

  //Make request

  res.status(200).send(mockedData)
})

// Expose Express API as a single Cloud Function:
exports.financeiro = functions.https.onRequest(app);