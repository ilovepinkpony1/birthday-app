export const normilizeBirthDate = (birth) => {
  const [, month, day] = birth.split('-');

  switch (month) {
    case ('01'):
      return `${day} січня`;
    case ('02'):
      return `${day} лютого`;
    case ('03'):
      return `${day} березня`;
    case ('04'):
      return `${day} квітня`;
    case ('05'):
      return `${day} травня`;
    case ('06'):
      return `${day} червня`;
    case ('07'):
      return `${day} липня`;
    case ('08'):
      return `${day} серпня`;
    case ('09'):
      return `${day} вересня`;
    case ('10'):
      return `${day} жовтня`;
    case ('11'):
      return `${day} листопаду`;
    case ('12'):
      return `${day} грудня`;
  }
}