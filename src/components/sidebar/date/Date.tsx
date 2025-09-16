import { Box } from "@chakra-ui/react"
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import '@/styles/style.css'

export const Date = () => {
    const[selectDate,setSelectDate] = useState<Date|null>(null);

    return (
            <Box suppressHydrationWarning>
                <DatePicker
                    showTimeSelect
                    timeFormat='HH:mm'
                    timeIntervals={15}
                    dateFormat={'yyyy/MM/dd HH:mm'}
                    placeholderText="日時を選択してください"
                    popperClassName="date-picker-popper"
                    popperPlacement="bottom-start"
                    selected={selectDate}
                    onChange={(date)=>setSelectDate(date)}
                />
            </Box>
    )
}