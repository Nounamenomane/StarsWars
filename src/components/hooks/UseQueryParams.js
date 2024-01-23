import { useLocation } from "react-router-dom";

export const getPeoplePageId = (url) => {
    console.log(url);
}

export const useQueryParams = () => {
    return new URLSearchParams(useLocation().search);
}