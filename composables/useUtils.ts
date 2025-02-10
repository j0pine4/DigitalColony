const useUtils = () => {

    const formatDate = (inputDate: Date) => {
        // Convert the incoming string date into an actual date object
        let dateConvert = new Date((inputDate.toString())).toDateString();
        return dateConvert
    }

    return {
        formatDate
    }

}

export default useUtils;