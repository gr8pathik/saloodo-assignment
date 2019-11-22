import React, {useState} from "react";
import {Button} from "react-bootstrap";
import 'react-datetime/css/react-datetime.css'
import DateTimePicker from 'react-datetime';
import moment from "moment";
import {STATUS_COLOR_MAPPING} from "../utils/constants";
export default (props) => {
    const [startDate, setStartDate] = useState(moment());
    return (
        <div>
            <DateTimePicker value={startDate} onChange={(value) => setStartDate(value)} />
            <Button className="mt-1 float-right" variant={STATUS_COLOR_MAPPING[props.status]} onClick={() => props.onClick(startDate)}>{props.text}</Button>
        </div>
    );
}