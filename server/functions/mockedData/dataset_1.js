module.exports = dataset_1

function dataset_1() {
  let data = {
      // Grupo de cobranças 1
      // ID interno do grupo de cobranças, para possível fetch individual futuro
      id: "RA0",

      // Título do grupo de cobranças. Pode ser o nome do aluno, ou como preferirem que apareça este "grupo"
      title: "Tchela Digital - Robótca - Tchela Digital - Robótca - Tchela Digital - Robótca",

      // Descrição do grupo de cobranças (aceita Quebras de linha)
      description: "Responsável Financeiro: John Doe. Descrição: Cobranças referentes a matricula no curso de robótica K12",

      // Qual é o número total de parcelas (por padrão, será a contagem de payables)
      installments: 6,

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
          dueAt: "2020-01-27",

          // Quando a cobrança foi paga (opcional. formato AAAA-MM-DD)
          paidAt: "2020-01-26",

          // Quando a cobrança foi enviada (opcional. formato AAAA-MM-DD)
          sentAt: "2020-01-01",

          // Valor que já foi pago
          centsPaid: 60000,

          // Valor total a ser pago (com multas/taxas, se aplicável)
          centsTotal: 60000,

          // Valor original (sem multas/taxas)
          centsOriginal: 60000,

          boleto: {

            // Link para baixar o boleto
            link: "https://files.readme.io/5a3f8e6-boleto.png", //URL,

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
              title: "Comprovante de pagamento",

              // Descrição do anexo
              description: "Pagamento realizado em 26/01/2020",

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
          description: "Mensalidade referente ao mês de Fevereiro de 2020",

          // Status da cobrança, valores possíveis:
          // paid: Pago
          // partially_paid: Parcialmente Pago
          // pending: Aguardando Pagamento
          // open: Em Aberto
          // canceled: Cancelado
          // late: Atrasado
          status: "paid",

          // Data de vencimento da cobrança (formato AAAA-MM-DD)
          dueAt: "2020-02-27",

          // Quando a cobrança foi paga (opcional. formato AAAA-MM-DD)
          paidAt: "2020-02-26",

          // Quando a cobrança foi enviada (opcional. formato AAAA-MM-DD)
          sentAt: "2020-02-01",

          // Valor que já foi pago
          centsPaid: 60000,

          // Valor total a ser pago (com multas/taxas, se aplicável)
          centsTotal: 60000,

          // Valor original (sem multas/taxas)
          centsOriginal: 60000,

          boleto: {

            // Link para baixar o boleto
            link: "https://files.readme.io/5a3f8e6-boleto.png", //URL,

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
              title: "Comprovante de pagamento",

              // Descrição do anexo
              description: "Pagamento realizado em 26/02/2020",

              // Link para baixar o anexo
              url: "https://url.para-download.com",
            },
            {

              // Tipo do anexo
              // Valores possivels:
              // invoice: Nota fiscal
              // file: Arquivo
              kind: 'file',

              // Nome do anexo
              title: "Comprovante de estorno",

              // Descrição do anexo
              description: "Estorno realizado em 31/03/2019",

              // Link para baixar o anexo
              url: "https://url.para-download.com",
            }
          ]
        },
        {
          // ID interno da cobrança no ERP, para possível futura integração
          id: "ID_DA_COBRANÇA2",

          // Identificador personalizado da cobrança (opcional, será vísivel na Interface)
          alias: "3213",

          // Qual é o número da parcela dessa cobrança?
          installment: 3,

          // Descrição da cobrança (aceita markdown)
          description: "Mensalidade referente ao mês de Março de 2020",

          // Status da cobrança, valores possíveis:
          // paid: Pago
          // partially_paid: Parcialmente Pago
          // pending: Aguardando Pagamento
          // open: Em Aberto
          // canceled: Cancelado
          // late: Atrasado
          status: "paid",

          // Data de vencimento da cobrança (formato AAAA-MM-DD)
          dueAt: "2020-03-27",

          // Quando a cobrança foi paga (opcional. formato AAAA-MM-DD)
          paidAt: "2020-03-26",

          // Quando a cobrança foi enviada (opcional. formato AAAA-MM-DD)
          sentAt: "2020-03-01",

          // Valor que já foi pago
          centsPaid: 60000,

          // Valor total a ser pago (com multas/taxas, se aplicável)
          centsTotal: 60000,

          // Valor original (sem multas/taxas)
          centsOriginal: 60000,

          boleto: {

            // Link para baixar o boleto
            link: "https://files.readme.io/5a3f8e6-boleto.png", //URL,

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
              title: "Comprovante de pagamento",

              // Descrição do anexo
              description: "Pagamento realizado em 26/02/2020",

              // Link para baixar o anexo
              url: "https://url.para-download.com",
            },
            {

              // Tipo do anexo
              // Valores possivels:
              // invoice: Nota fiscal
              // file: Arquivo
              kind: 'file',

              // Nome do anexo
              title: "Comprovante de estorno",

              // Descrição do anexo
              description: "Estorno realizado em 31/03/2019",

              // Link para baixar o anexo
              url: "https://url.para-download.com",
            }
          ]
        },
        {
          // ID interno da cobrança no ERP, para possível futura integração
          id: "ID_DA_COBRANÇA3",

          // Identificador personalizado da cobrança (opcional, será vísivel na Interface)
          alias: "3213",

          // Qual é o número da parcela dessa cobrança?
          installment: 4,

          // Descrição da cobrança (aceita markdown)
          description: "Mensalidade referente ao mês de Abril de 2020",

          // Status da cobrança, valores possíveis:
          // paid: Pago
          // partially_paid: Parcialmente Pago
          // pending: Aguardando Pagamento
          // open: Em Aberto
          // canceled: Cancelado
          // late: Atrasado
          status: "paid",

          // Data de vencimento da cobrança (formato AAAA-MM-DD)
          dueAt: "2020-04-27",

          // Quando a cobrança foi paga (opcional. formato AAAA-MM-DD)
          paidAt: "2020-04-26",

          // Quando a cobrança foi enviada (opcional. formato AAAA-MM-DD)
          sentAt: "2020-04-01",

          // Valor que já foi pago
          centsPaid: 60000,

          // Valor total a ser pago (com multas/taxas, se aplicável)
          centsTotal: 60000,

          // Valor original (sem multas/taxas)
          centsOriginal: 60000,

          boleto: {

            // Link para baixar o boleto
            link: "https://files.readme.io/5a3f8e6-boleto.png", //URL,

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
              title: "Comprovante de pagamento",

              // Descrição do anexo
              description: "Pagamento realizado em 26/02/2020",

              // Link para baixar o anexo
              url: "https://url.para-download.com",
            },
            {

              // Tipo do anexo
              // Valores possivels:
              // invoice: Nota fiscal
              // file: Arquivo
              kind: 'file',

              // Nome do anexo
              title: "Comprovante de estorno",

              // Descrição do anexo
              description: "Estorno realizado em 31/03/2019",

              // Link para baixar o anexo
              url: "https://url.para-download.com",
            }
          ]
        },
        {
          // ID interno da cobrança no ERP, para possível futura integração
          id: "ID_DA_COBRANÇA4",

          // Identificador personalizado da cobrança (opcional, será vísivel na Interface)
          alias: "3213",

          // Qual é o número da parcela dessa cobrança?
          installment: 5,

          // Descrição da cobrança (aceita markdown)
          description: "**Mensalidade referente ao mês de Maio de 2020**.<br>\
          **Itens inclusos:**<br>\
          - (1un) Kit lego mindstorms<br>\
          - (1un) Apostila didática<br>\
          - App de montagem <br>\
          - (1un) Craftbox Code",

          // Status da cobrança, valores possíveis:
          // paid: Pago
          // partially_paid: Parcialmente Pago
          // pending: Aguardando Pagamento
          // open: Em Aberto
          // canceled: Cancelado
          // late: Atrasado
          status: "pending",

          // Data de vencimento da cobrança (formato AAAA-MM-DD)
          dueAt: "2020-05-29",

          // Quando a cobrança foi paga (opcional. formato AAAA-MM-DD)
          paidAt: null,

          // Quando a cobrança foi enviada (opcional. formato AAAA-MM-DD)
          sentAt: "2020-05-01",

          // Valor que já foi pago
          centsPaid: 0,

          // Valor total a ser pago (com multas/taxas, se aplicável)
          centsTotal: 60000,

          // Valor original (sem multas/taxas)
          centsOriginal: 60000,

          boleto: {

            // Link para baixar o boleto
            link: "https://files.readme.io/5a3f8e6-boleto.png", //URL,

            // Linha digitável do boleto, será usada para o usuário copiar o código sem ter que baixar o boleto
            code: "12341234123412341234",
          },

          // Lista de anexos da cobrança (opcional)
          attachments: [ ]
        },
        {
          // ID interno da cobrança no ERP, para possível futura integração
          id: "ID_DA_COBRANÇA5",

          // Identificador personalizado da cobrança (opcional, será vísivel na Interface)
          alias: "3213",

          // Qual é o número da parcela dessa cobrança?
          installment: 6,

          // Descrição da cobrança (aceita markdown)
          description: "Mensalidade referente ao mês de Junho de 2020",

          // Status da cobrança, valores possíveis:
          // paid: Pago
          // partially_paid: Parcialmente Pago
          // pending: Aguardando Pagamento
          // open: Em Aberto
          // canceled: Cancelado
          // late: Atrasado
          status: "open",

          // Data de vencimento da cobrança (formato AAAA-MM-DD)
          dueAt: "2020-06-27",

          // Quando a cobrança foi paga (opcional. formato AAAA-MM-DD)
          paidAt: null,

          // Quando a cobrança foi enviada (opcional. formato AAAA-MM-DD)
          sentAt: "2020-04-01",

          // Valor que já foi pago
          centsPaid: 0,

          // Valor total a ser pago (com multas/taxas, se aplicável)
          centsTotal: 60000,

          // Valor original (sem multas/taxas)
          centsOriginal: 60000,

          boleto: {

            // Link para baixar o boleto
            link: "https://files.readme.io/5a3f8e6-boleto.png", //URL,

            // Linha digitável do boleto, será usada para o usuário copiar o código sem ter que baixar o boleto
            code: "12341234123412341234",
          },

          // Lista de anexos da cobrança (opcional)
          attachments: []
        },
      ]
    }

  return data
}