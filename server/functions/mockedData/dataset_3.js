module.exports = dataset_3

function dataset_3() {
  let data = {
    // Grupo de cobranças 2
      // ID interno do grupo de cobranças, para possível fetch individual futuro
      id: "RA3",

      // Título do grupo de cobranças. Pode ser o nome do aluno, ou como preferirem que apareça este "grupo"
      title: "Lucas Grippa - Material didático",

      // Descrição do grupo de cobranças (aceita Quebras de linha)
      description: "Responsável Financeiro: John Doe. Descrição: Cobranças referentes a matricula no curso de cinema",

      // Qual é o número total de parcelas (por padrão, será a contagem de payables)
      installments: 1,

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
          description: "Material didático do ano letivo de 2020",

          // Status da cobrança, valores possíveis:
          // paid: Pago
          // partially_paid: Parcialmente Pago
          // pending: Aguardando Pagamento
          // open: Em Aberto
          // canceled: Cancelado
          // late: Atrasado
          status: "paid",

          // Data de vencimento da cobrança (formato AAAA-MM-DD)
          dueAt: "2020-01-20",

          // Quando a cobrança foi paga (opcional. formato AAAA-MM-DD)
          paidAt: "2020-01-15",

          // Quando a cobrança foi enviada (opcional. formato AAAA-MM-DD)
          sentAt: "2020-01-01",

          // Valor que já foi pago
          centsPaid: 240000,

          // Valor total a ser pago (com multas/taxas, se aplicável)
          centsTotal: 240000,

          // Valor original (sem multas/taxas)
          centsOriginal: 240000,

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
      ]
  }

  return data

}