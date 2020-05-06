export default function formatDate(dateString) {
  let date = new Date(dateString)
  let day  = date.getDate().toString().padStart(2, '0')
  let month  = (date.getMonth()+1).toString().padStart(2, '0')
  let year  = date.getFullYear()

  return `${day}/${month}/${year}`
}