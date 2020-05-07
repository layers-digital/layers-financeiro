module.exports = dataset_2

function dataset_2() {
  let data = {
      // Grupo de cobranças 2
      // ID interno do grupo de cobranças, para possível fetch individual futuro
      id: "RA1",

      // Título do grupo de cobranças. Pode ser o nome do aluno, ou como preferirem que apareça este "grupo"
      title: "Lucas Grippa - Cinema",

      // Descrição do grupo de cobranças (aceita Quebras de linha)
      description: "Responsável Financeiro: John Doe. Descrição: Cobranças referentes a matricula no curso de cinema",

      // Qual é o número total de parcelas (por padrão, será a contagem de payables)
      installments: 12,

      // Lista de cobranças que fazem parte desse grupo
      payables: [
        {
          // ID interno da cobrança no ERP, para possível futura integração
          id: "ID_DA_COBRANÇA1",

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
          dueAt: "2020-01-04",

          // Quando a cobrança foi paga (opcional. formato AAAA-MM-DD)
          paidAt: "2020-01-03",

          // Quando a cobrança foi enviada (opcional. formato AAAA-MM-DD)
          sentAt: "2020-01-01",

          // Valor que já foi pago
          centsPaid: 120000,

          // Valor total a ser pago (com multas/taxas, se aplicável)
          centsTotal: 120000,

          // Valor original (sem multas/taxas)
          centsOriginal: 120000,

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
              title: "Comprovante de pagamento",

              // Descrição do anexo
              description: "Pagamento realizado",

              // Link para baixar o anexo
              url: "https://url.para-download.com",
            },
          ]
        },
        {
          // ID interno da cobrança no ERP, para possível futura integração
          id: "ID_DA_COBRANÇA2",

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
          dueAt: "2020-02-04",

          // Quando a cobrança foi paga (opcional. formato AAAA-MM-DD)
          paidAt: "2020-02-03",

          // Quando a cobrança foi enviada (opcional. formato AAAA-MM-DD)
          sentAt: "2020-02-01",

          // Valor que já foi pago
          centsPaid: 120000,

          // Valor total a ser pago (com multas/taxas, se aplicável)
          centsTotal: 120000,

          // Valor original (sem multas/taxas)
          centsOriginal: 120000,

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
              title: "Comprovante de pagamento",

              // Descrição do anexo
              description: "Pagamento realizado",

              // Link para baixar o anexo
              url: "https://url.para-download.com",
            },
          ]
        },
        {
          // ID interno da cobrança no ERP, para possível futura integração
          id: "ID_DA_COBRANÇA3",

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
          dueAt: "2020-03-04",

          // Quando a cobrança foi paga (opcional. formato AAAA-MM-DD)
          paidAt: "2020-03-03",

          // Quando a cobrança foi enviada (opcional. formato AAAA-MM-DD)
          sentAt: "2020-03-01",

          // Valor que já foi pago
          centsPaid: 120000,

          // Valor total a ser pago (com multas/taxas, se aplicável)
          centsTotal: 120000,

          // Valor original (sem multas/taxas)
          centsOriginal: 120000,

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
              title: "Comprovante de pagamento",

              // Descrição do anexo
              description: "Pagamento realizado",

              // Link para baixar o anexo
              url: "https://url.para-download.com",
            },
          ]
        },
        {
          // ID interno da cobrança no ERP, para possível futura integração
          id: "ID_DA_COBRANÇA4",

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
          dueAt: "2020-04-04",

          // Quando a cobrança foi paga (opcional. formato AAAA-MM-DD)
          paidAt: "2020-04-03",

          // Quando a cobrança foi enviada (opcional. formato AAAA-MM-DD)
          sentAt: "2020-04-01",

          // Valor que já foi pago
          centsPaid: 120000,

          // Valor total a ser pago (com multas/taxas, se aplicável)
          centsTotal: 120000,

          // Valor original (sem multas/taxas)
          centsOriginal: 120000,

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
              title: "Comprovante de pagamento",

              // Descrição do anexo
              description: "Pagamento realizado",

              // Link para baixar o anexo
              url: "https://url.para-download.com",
            },
          ]
        },
        {
          // ID interno da cobrança no ERP, para possível futura integração
          id: "ID_DA_COBRANÇA5",

          // Identificador personalizado da cobrança (opcional, será vísivel na Interface)
          alias: "3213",

          // Qual é o número da parcela dessa cobrança?
          installment: 5,

          // Descrição da cobrança (aceita markdown)
          description: "**Mensalidade referente ao mês de Maio de 2020**.<br>\
          - Multa aplicada devido ao atraso no pagamento",

          // Status da cobrança, valores possíveis:
          // paid: Pago
          // partially_paid: Parcialmente Pago
          // pending: Aguardando Pagamento
          // open: Em Aberto
          // canceled: Cancelado
          // late: Atrasado
          status: "late",

          // Data de vencimento da cobrança (formato AAAA-MM-DD)
          dueAt: "2020-05-04",

          // Quando a cobrança foi paga (opcional. formato AAAA-MM-DD)
          paidAt:  null,

          // Quando a cobrança foi enviada (opcional. formato AAAA-MM-DD)
          sentAt: "2020-05-01",

          // Valor que já foi pago
          centsPaid: 0,

          // Valor total a ser pago (com multas/taxas, se aplicável)
          centsTotal: 130000,

          // Valor original (sem multas/taxas)
          centsOriginal: 120000,

          boleto: {

            // Link para baixar o boleto
            link: "https://boleto.pdf", //URL,

            // Linha digitável do boleto, será usada para o usuário copiar o código sem ter que baixar o boleto
            code: "12341234123412341234",
          },

          // Lista de anexos da cobrança (opcional)
          attachments: [
          ]
        },
        {
          // ID interno da cobrança no ERP, para possível futura integração
          id: "ID_DA_COBRANÇA6",

          // Identificador personalizado da cobrança (opcional, será vísivel na Interface)
          alias: "3213",

          // Qual é o número da parcela dessa cobrança?
          installment: 6,

          // Descrição da cobrança (aceita markdown)
          description: "Mensalidade referente ao mês de Junho de 2020.",

          // Status da cobrança, valores possíveis:
          // paid: Pago
          // partially_paid: Parcialmente Pago
          // pending: Aguardando Pagamento
          // open: Em Aberto
          // canceled: Cancelado
          // late: Atrasado
          status: "open",

          // Data de vencimento da cobrança (formato AAAA-MM-DD)
          dueAt: "2020-06-04",

          // Quando a cobrança foi paga (opcional. formato AAAA-MM-DD)
          paidAt:  null,

          // Quando a cobrança foi enviada (opcional. formato AAAA-MM-DD)
          sentAt: "2020-05-01",

          // Valor que já foi pago
          centsPaid: 0,

          // Valor total a ser pago (com multas/taxas, se aplicável)
          centsTotal: 120000,

          // Valor original (sem multas/taxas)
          centsOriginal: 120000,

          boleto: {

            // Link para baixar o boleto
            link: "https://boleto.pdf", //URL,

            // Linha digitável do boleto, será usada para o usuário copiar o código sem ter que baixar o boleto
            code: "12341234123412341234",
          },

          // Lista de anexos da cobrança (opcional)
          attachments: [
          ]
        },
        {
          // ID interno da cobrança no ERP, para possível futura integração
          id: "ID_DA_COBRANÇA7",

          // Identificador personalizado da cobrança (opcional, será vísivel na Interface)
          alias: "3213",

          // Qual é o número da parcela dessa cobrança?
          installment: 7,

          // Descrição da cobrança (aceita markdown)
          description: "Mensalidade referente ao mês de Julho de 2020.",

          // Status da cobrança, valores possíveis:
          // paid: Pago
          // partially_paid: Parcialmente Pago
          // pending: Aguardando Pagamento
          // open: Em Aberto
          // canceled: Cancelado
          // late: Atrasado
          status: "open",

          // Data de vencimento da cobrança (formato AAAA-MM-DD)
          dueAt: "2020-07-04",

          // Quando a cobrança foi paga (opcional. formato AAAA-MM-DD)
          paidAt:  null,

          // Quando a cobrança foi enviada (opcional. formato AAAA-MM-DD)
          sentAt: "2020-05-01",

          // Valor que já foi pago
          centsPaid: 0,

          // Valor total a ser pago (com multas/taxas, se aplicável)
          centsTotal: 120000,

          // Valor original (sem multas/taxas)
          centsOriginal: 120000,

          boleto: {

            // Link para baixar o boleto
            link: "https://boleto.pdf", //URL,

            // Linha digitável do boleto, será usada para o usuário copiar o código sem ter que baixar o boleto
            code: "12341234123412341234",
          },

          // Lista de anexos da cobrança (opcional)
          attachments: [
          ]
        },
        {
          // ID interno da cobrança no ERP, para possível futura integração
          id: "ID_DA_COBRANÇA8",

          // Identificador personalizado da cobrança (opcional, será vísivel na Interface)
          alias: "3213",

          // Qual é o número da parcela dessa cobrança?
          installment: 8,

          // Descrição da cobrança (aceita markdown)
          description: "Mensalidade referente ao mês de Agosto de 2020.",

          // Status da cobrança, valores possíveis:
          // paid: Pago
          // partially_paid: Parcialmente Pago
          // pending: Aguardando Pagamento
          // open: Em Aberto
          // canceled: Cancelado
          // late: Atrasado
          status: "open",

          // Data de vencimento da cobrança (formato AAAA-MM-DD)
          dueAt: "2020-08-04",

          // Quando a cobrança foi paga (opcional. formato AAAA-MM-DD)
          paidAt:  null,

          // Quando a cobrança foi enviada (opcional. formato AAAA-MM-DD)
          sentAt: "2020-05-01",

          // Valor que já foi pago
          centsPaid: 0,

          // Valor total a ser pago (com multas/taxas, se aplicável)
          centsTotal: 120000,

          // Valor original (sem multas/taxas)
          centsOriginal: 120000,

          boleto: {

            // Link para baixar o boleto
            link: "https://boleto.pdf", //URL,

            // Linha digitável do boleto, será usada para o usuário copiar o código sem ter que baixar o boleto
            code: "12341234123412341234",
          },

          // Lista de anexos da cobrança (opcional)
          attachments: [
          ]
        },
        {
          // ID interno da cobrança no ERP, para possível futura integração
          id: "ID_DA_COBRANÇA9",

          // Identificador personalizado da cobrança (opcional, será vísivel na Interface)
          alias: "3213",

          // Qual é o número da parcela dessa cobrança?
          installment: 9,

          // Descrição da cobrança (aceita markdown)
          description: "Mensalidade referente ao mês de Setembro de 2020.",

          // Status da cobrança, valores possíveis:
          // paid: Pago
          // partially_paid: Parcialmente Pago
          // pending: Aguardando Pagamento
          // open: Em Aberto
          // canceled: Cancelado
          // late: Atrasado
          status: "open",

          // Data de vencimento da cobrança (formato AAAA-MM-DD)
          dueAt: "2020-09-04",

          // Quando a cobrança foi paga (opcional. formato AAAA-MM-DD)
          paidAt:  null,

          // Quando a cobrança foi enviada (opcional. formato AAAA-MM-DD)
          sentAt: "2020-05-01",

          // Valor que já foi pago
          centsPaid: 0,

          // Valor total a ser pago (com multas/taxas, se aplicável)
          centsTotal: 120000,

          // Valor original (sem multas/taxas)
          centsOriginal: 120000,

          boleto: {

            // Link para baixar o boleto
            link: "https://boleto.pdf", //URL,

            // Linha digitável do boleto, será usada para o usuário copiar o código sem ter que baixar o boleto
            code: "12341234123412341234",
          },

          // Lista de anexos da cobrança (opcional)
          attachments: [
          ]
        },
        {
          // ID interno da cobrança no ERP, para possível futura integração
          id: "ID_DA_COBRANÇA10",

          // Identificador personalizado da cobrança (opcional, será vísivel na Interface)
          alias: "3213",

          // Qual é o número da parcela dessa cobrança?
          installment: 10,

          // Descrição da cobrança (aceita markdown)
          description: "Mensalidade referente ao mês de Outubro de 2020.",

          // Status da cobrança, valores possíveis:
          // paid: Pago
          // partially_paid: Parcialmente Pago
          // pending: Aguardando Pagamento
          // open: Em Aberto
          // canceled: Cancelado
          // late: Atrasado
          status: "open",

          // Data de vencimento da cobrança (formato AAAA-MM-DD)
          dueAt: "2020-10-04",

          // Quando a cobrança foi paga (opcional. formato AAAA-MM-DD)
          paidAt:  null,

          // Quando a cobrança foi enviada (opcional. formato AAAA-MM-DD)
          sentAt: "2020-05-01",

          // Valor que já foi pago
          centsPaid: 0,

          // Valor total a ser pago (com multas/taxas, se aplicável)
          centsTotal: 120000,

          // Valor original (sem multas/taxas)
          centsOriginal: 120000,

          boleto: {

            // Link para baixar o boleto
            link: "https://boleto.pdf", //URL,

            // Linha digitável do boleto, será usada para o usuário copiar o código sem ter que baixar o boleto
            code: "12341234123412341234",
          },

          // Lista de anexos da cobrança (opcional)
          attachments: [
          ]
        },
        {
          // ID interno da cobrança no ERP, para possível futura integração
          id: "ID_DA_COBRANÇA11",

          // Identificador personalizado da cobrança (opcional, será vísivel na Interface)
          alias: "3213",

          // Qual é o número da parcela dessa cobrança?
          installment: 11,

          // Descrição da cobrança (aceita markdown)
          description: "Mensalidade referente ao mês de Novembro de 2020.",

          // Status da cobrança, valores possíveis:
          // paid: Pago
          // partially_paid: Parcialmente Pago
          // pending: Aguardando Pagamento
          // open: Em Aberto
          // canceled: Cancelado
          // late: Atrasado
          status: "open",

          // Data de vencimento da cobrança (formato AAAA-MM-DD)
          dueAt: "2020-11-04",

          // Quando a cobrança foi paga (opcional. formato AAAA-MM-DD)
          paidAt:  null,

          // Quando a cobrança foi enviada (opcional. formato AAAA-MM-DD)
          sentAt: "2020-05-01",

          // Valor que já foi pago
          centsPaid: 0,

          // Valor total a ser pago (com multas/taxas, se aplicável)
          centsTotal: 120000,

          // Valor original (sem multas/taxas)
          centsOriginal: 120000,

          boleto: {

            // Link para baixar o boleto
            link: "https://boleto.pdf", //URL,

            // Linha digitável do boleto, será usada para o usuário copiar o código sem ter que baixar o boleto
            code: "12341234123412341234",
          },

          // Lista de anexos da cobrança (opcional)
          attachments: [
          ]
        },
        {
          // ID interno da cobrança no ERP, para possível futura integração
          id: "ID_DA_COBRANÇA12",

          // Identificador personalizado da cobrança (opcional, será vísivel na Interface)
          alias: "3213",

          // Qual é o número da parcela dessa cobrança?
          installment: 12,

          // Descrição da cobrança (aceita markdown)
          description: "Mensalidade referente ao mês de Dezembro de 2020.",

          // Status da cobrança, valores possíveis:
          // paid: Pago
          // partially_paid: Parcialmente Pago
          // pending: Aguardando Pagamento
          // open: Em Aberto
          // canceled: Cancelado
          // late: Atrasado
          status: "open",

          // Data de vencimento da cobrança (formato AAAA-MM-DD)
          dueAt: "2020-12-04",

          // Quando a cobrança foi paga (opcional. formato AAAA-MM-DD)
          paidAt:  null,

          // Quando a cobrança foi enviada (opcional. formato AAAA-MM-DD)
          sentAt: "2020-05-01",

          // Valor que já foi pago
          centsPaid: 0,

          // Valor total a ser pago (com multas/taxas, se aplicável)
          centsTotal: 120000,

          // Valor original (sem multas/taxas)
          centsOriginal: 120000,

          boleto: {

            // Link para baixar o boleto
            link: "https://boleto.pdf", //URL,

            // Linha digitável do boleto, será usada para o usuário copiar o código sem ter que baixar o boleto
            code: "12341234123412341234",
          },

          // Lista de anexos da cobrança (opcional)
          attachments: [
          ]
        },
      ]
    }

    return data
}