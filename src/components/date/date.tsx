import { Box } from "@chakra-ui/react"
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export const Date = () => {

    return (
        <Box>
            <DatePicker
                showTimeSelect
                timeFormat='HH:mm'
                timeIntervals={15}
                dateFormat={'yyyy/MM/dd HH:mm'}
                locale="ja"
                placeholderText="日時を選択してください"
            />
        </Box>
    )
}