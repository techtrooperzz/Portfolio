import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

/**
 * Send booking email request to backend
 */
export const sendEmail = async (payload: {
    email: string;
    name: string;
    date: string;
    time: string;
    }) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/email/send-email`, payload);

        const data = response.data;

        if (!data.success) {
        throw new Error(data?.message || "Failed to send email");
        }

        return data;
    } catch (error: any) {
        console.error("sendEmail API error:", error.message);
        throw error;
    }
};