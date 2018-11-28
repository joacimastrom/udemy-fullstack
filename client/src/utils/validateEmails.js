const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default emails => {
  const invalidEmails = emails
    .split(',')
    .map(e => e.trim())
    .filter(e => e && re.test(e) === false);

  if (invalidEmails.length) {
    return `Invalid emails: ${invalidEmails}`;
  }

  return;
};
