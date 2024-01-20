export default function toPhoneNumber(phoneNumber: string | null | undefined): string {
   if(!phoneNumber) return '';
   const cleaned = phoneNumber.replace(/\D/g, '');
   const match = cleaned.match(/^(1)?(\d{3})(\d{3})(\d{4})$/);
 
   if (match) {
     const hasLeadingOne = match[1] === "1";
     const prefix = hasLeadingOne ? "1-" : "";
     const firstGroup = match[2];
     const secondGroup = match[3];
     const thirdGroup = match[4];
     return `${prefix}${firstGroup}-${secondGroup}-${thirdGroup}`;
   }
 
   return '';
 }