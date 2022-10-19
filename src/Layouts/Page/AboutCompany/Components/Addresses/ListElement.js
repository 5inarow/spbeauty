import styled from 'styled-components';
import SecondaryButton from '../../../../../Components/SecondaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';

const Card = styled.div`
    outline: none;
    border-radius: 0px;
    border: solid #ffffff 1px;
    background-color: #ffffff;
    color: #64748B;
`;

function ListElement(props) {
    return (
        <Card className='d-flex flex-row justify-content-between align-items-center gap-2 p-3 ps-0 pe-0'>
            <text className='d-flex flex-grow-1'>{props.children}</text>
            <IconOnlyButton icon={<EditIcon/>}></IconOnlyButton>
            <IconOnlyButton icon={<RemoveIcon/>}></IconOnlyButton>
            
        </Card>
    );
}

export default ListElement;