import styled from "styled-components";
import TitledTextInput from "../../../../../../Components/TitledTextInput";
import TitledSelector from "../../../../../../Components/TitledSelector";
import PrimaryButton from "../../../../../../Components/PrimaryButton";

const Box = styled.div`
width: 448px;
`
;

function Preferences() {
    return (
        <Box className='d-inline-flex flex-column gap-4 ms-5 mt-0'>
            <div className='d-flex flex-column gap-3'>
            <TitledTextInput title='Название компании' def='SPBEAUTY'/>
            <TitledSelector title='Тип организации' options={[
                'Салон красоты',
                'Парикмахерская'
            ]}/>
            <TitledTextInput title='Основной телефон для связи' def='+7 (912) 345-67-89'/>
            </div>
            <PrimaryButton>Сохранить</PrimaryButton>
        </Box>
    );
}

export default Preferences;