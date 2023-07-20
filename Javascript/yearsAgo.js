export default function yearsAgo(year){ 	
    return new Date().getFullYear() - new Date(year.toString()).getFullYear();
}