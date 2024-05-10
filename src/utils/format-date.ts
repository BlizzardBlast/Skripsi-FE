const formatDate = (date: string): string => {
  const finalDate = new Date(date);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Mei',
    'Jun',
    'Jul',
    'Agt',
    'Sep',
    'Okt',
    'Nov',
    'Des'
  ];
  const formattedDate = `${finalDate.getDate()} ${months[finalDate.getMonth()]} ${finalDate.getFullYear()} ${String(finalDate.getHours()).padStart(2, '0')}:${String(finalDate.getMinutes()).padStart(2, '0')}`;

  return formattedDate;
};

export default formatDate;
