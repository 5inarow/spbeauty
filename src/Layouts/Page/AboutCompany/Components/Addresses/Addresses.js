import styled from 'styled-components';
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";



function Addresses() {
    const Addresses = styled.div`
    outline: none;
    border-radius: 8px;
    border: solid rgba(100,116,139,12%) 1px;
    background-color: #ffffff;
    color: #666787;
    height: 420px;
    width: 453px;
`;

const MText = styled.text`
color: #0F172A;
`;

return (
        <Addresses className='d-flex justify-content-between flex-column p-4 mt-5'>
            <div className='d-flex flex-column gap-4'>
                    <MText className='title'>Адреса заведений</MText>
                    <div className='d-inline-flex flex-column gap-2'>
                    <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                    <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                    </div>
            </div>
                    <SecondaryButton>Добавить филиал</SecondaryButton>
            </Addresses>
    );
}

export default Addresses;