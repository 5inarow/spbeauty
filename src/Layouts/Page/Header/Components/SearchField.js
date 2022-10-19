import styled from "styled-components";
import SearchIcon from "../../../../Icons/SearchIcon";
import IconOnlyButton from "../../../../Components/IconOnlyButton";

const WrapperInput = styled.div`
  position: relative;
  width: 216px;
`;

const Input = styled.input`
  outline: none;
  border-radius: 24px;
  border: solid #E2E8F0 1px;
  background-color: #F8FAFC;
  color: #94A3B8;
  width: 100%;
  &:hover {
    background: rgba(248,250,252,80%);
    border: 1px solid rgba(226,232,240,80%);
    
      }
  &:focus {
    background: F8FAFC;
  }
`;

const SearchIconWrapper = styled.div`
  background-color: rgba(255,255,255,0);
  position: absolute;
  box-sizing: border-box;
  right: 16px; /* Здесь можно добавить отступ от правого края, чтобы сдвинуть иконку левее */
  top: 50%;
  transform: translateY(-50%);
`;

function SearchField() {
  return (
    <WrapperInput className="d-inline-flex">
      {" "}
      {/* Устанавливает ширину поля и включает относительное положение */}
      <Input className="p-2 text-rg ps-3" placeholder="Найти"/>
      <SearchIconWrapper className="p-2">
        {" "}
        {/* Устанавливает абсолютное положение внутри поля ввода */}
        <IconOnlyButton icon={<SearchIcon />} />
      </SearchIconWrapper>
    </WrapperInput>
  );
}

export default SearchField;
