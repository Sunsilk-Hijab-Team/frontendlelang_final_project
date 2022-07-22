
// create costum reusable hook to convert number to rupiah
export const Rupiah = (number) => {
    const rupiah = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number);
    return rupiah;
}