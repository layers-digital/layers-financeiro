const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const hydratePayables = require('./pipes/hydratePayables');
const filterCriticalPayables = require('./pipes/filterCriticalPayables');
const hydrateGroups = require('./pipes/hydrateGroups');

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }))

let mockedData = {groups: [
    // Grupo de cobranças 1
    {

      // ID interno do grupo de cobranças, para possível fetch individual futuro
      id: "RA0",

      // Título do grupo de cobranças. Pode ser o nome do aluno, ou como preferirem que apareça este "grupo"
      title: "Aluno Munir Seduca",

      // Descrição do grupo de cobranças (aceita Quebras de linha)
      description: "Responsável Financeiro: ...\n...",

      // Qual é o número total de parcelas (por padrão, será a contagem de payables)
      installments: 2,

      // Lista de cobranças que fazem parte desse grupo
      payables: [
        {
          // ID interno da cobrança no ERP, para possível futura integração
          id: "ID_DA_COBRANÇA0",

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
          status: "paid",

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
        },
        {
          // ID interno da cobrança no ERP, para possível futura integração
          id: "ID_DA_COBRANÇA1",

          // Identificador personalizado da cobrança (opcional, será vísivel na Interface)
          alias: "3213",

          // Qual é o número da parcela dessa cobrança?
          installment: 2,

          // Descrição da cobrança (aceita markdown)
          description: "Mensalidade referente ao mês de Janeiro de 2020",

          // Status da cobrança, valores possíveis:
          // paid: Pago
          // partially_paid: Parcialmente Pago
          // pending: Aguardando Pagamento
          // open: Em Aberto
          // canceled: Cancelado
          // late: Atrasado
          status: "open",

          // Data de vencimento da cobrança (formato AAAA-MM-DD)
          dueAt: "2020-02-01",

          // Quando a cobrança foi paga (opcional. formato AAAA-MM-DD)
          paidAt: null,

          // Quando a cobrança foi enviada (opcional. formato AAAA-MM-DD)
          sentAt: null,

          // Valor que já foi pago
          centsPaid: 1,

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
        },
      ]
    },
    // Grupo de cobranças 2
    {
      // ID interno do grupo de cobranças, para possível fetch individual futuro
      id: "RA1",

      // Título do grupo de cobranças. Pode ser o nome do aluno, ou como preferirem que apareça este "grupo"
      title: "Lucas Grippa Marques",

      // Descrição do grupo de cobranças (aceita Quebras de linha)
      description: "Responsável Financeiro: ...\n...",

      // Qual é o número total de parcelas (por padrão, será a contagem de payables)
      installments: 3,

      // Lista de cobranças que fazem parte desse grupo
      payables: [
        {
          // ID interno da cobrança no ERP, para possível futura integração
          id: "ID_DA_COBRANÇA2",

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
          status: "late",

          // Data de vencimento da cobrança (formato AAAA-MM-DD)
          dueAt: "2020-05-01",

          //DUE AT FRIENDLY

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
        },

        {
          // ID interno da cobrança no ERP, para possível futura integração
          id: "ID_DA_COBRANÇA3",

          // Identificador personalizado da cobrança (opcional, será vísivel na Interface)
          alias: "321123",

          // Qual é o número da parcela dessa cobrança?
          installment: 2,

          // Descrição da cobrança (aceita markdown)
          description: "Mensalidade referente ao mês de Janeiro de 2020",

          // Status da cobrança, valores possíveis:
          // paid: Pago
          // partially_paid: Parcialmente Pago
          // pending: Aguardando Pagamento
          // open: Em Aberto
          // canceled: Cancelado
          // late: Atrasado
          status: "open",

          // Data de vencimento da cobrança (formato AAAA-MM-DD)
          dueAt: "2020-06-01",

          //DUE AT FRIENDLY

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
        },

        {
          // ID interno da cobrança no ERP, para possível futura integração
          id: "ID_DA_COBRANÇA4",

          // Identificador personalizado da cobrança (opcional, será vísivel na Interface)
          alias: "321123",

          // Qual é o número da parcela dessa cobrança?
          installment: 2,

          // Descrição da cobrança (aceita markdown)
          description: "Mensalidade referente ao mês de Janeiro de 2020",

          // Status da cobrança, valores possíveis:
          // paid: Pago
          // partially_paid: Parcialmente Pago
          // pending: Aguardando Pagamento
          // open: Em Aberto
          // canceled: Cancelado
          // late: Atrasado
          status: "open",

          // Data de vencimento da cobrança (formato AAAA-MM-DD)
          dueAt: "2020-06-01",

          //DUE AT FRIENDLY

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
        },
      ]
    }
  ],
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
  let payload = mockedData

  payload = hydrateGroups(payload)
  payload = hydratePayables(payload)
  payload = filterCriticalPayables(payload)

  res.status(200).send(payload)
})

// Expose Express API as a single Cloud Function:
exports.financeiro = functions.https.onRequest(app);