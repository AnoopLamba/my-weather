import axios from "axios";

const templateId = process.env.REACT_APP_TEMPLATE_ID;
const serviceId = process.env.REACT_APP_SERVICE_ID;
const publicApiKey = process.env.REACT_APP_PUBLIC_KEY;

const url = "https://api.emailjs.com/api/v1.0/email/send";

const sendMail = async (formdata) => {
  var data = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicApiKey,
    template_params: { ...formdata },
  };

  const response = await axios.post(url, data);
  return response;
};

const emailjsService = { sendMail };

export default emailjsService;
