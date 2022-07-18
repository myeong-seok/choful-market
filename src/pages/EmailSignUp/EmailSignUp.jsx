import styled from 'styled-components';
import { CommonWrapper } from '../../components/common/commonWrapper';
import InputForm from '../../components/modules/InputForm/InputForm';

const FormWrapper = styled.div`
  margin-top: 30px;
`;

const EmailSignUp = () => {
  return (
  <CommonWrapper>
    <FormWrapper>
      <InputForm 
      title='이메일로 회원가입' 
      FirstLabel='이메일' 
      FirstLabelType='text' 
      SecLabel='비밀번호' 
      SecLabelType='password' 
      btnLabel='다음' 
      FirstPlaceHolder='이메일을 입력하세요.' 
      SecPlaceHolder='비밀번호 입력하세요.'>
      </InputForm>
    </FormWrapper>

  </CommonWrapper>
  );
};

export default EmailSignUp;