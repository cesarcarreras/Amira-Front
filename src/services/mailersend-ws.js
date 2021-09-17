import axios from 'axios'

const baseURL = 'https://api.mailersend.com/v1'

const _api = axios.create({
    baseURL,
    withCredentials: true,
    headers: {Authorization : `Bearer ${process.env.API_MS}`}
})

export const getActivity = () => _api.get('/activity/0r83ql33qvlzw1jm');
export const getMailActivity = () => _api.get('/analytics/date/?date_from=1630454400&date_to=1632960000&event[]=sent&group_by=months')