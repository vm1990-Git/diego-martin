export const isMobileDevice = () => {
  return /Mobi|Android/i.test(navigator.userAgent);
};

export const makePhoneCall = (phoneNumber) => {
  if (isMobileDevice()) {
    window.location.href = `tel:${phoneNumber}`;
  } else {
    console.warn("Phone call feature is only available on mobile devices.");
  }
};

export const openWhatsapp = (phoneNumber) => {
  window.open(`https://api.whatsapp.com/send/?phone=${phoneNumber}`);
};
