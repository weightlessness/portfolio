import * as React from "react";
import {Col, Container, Row} from "../../Grid";
import styled from "styled-components";
import {Colors} from "../../../constants/colors";
import {BREAKPOINTS} from "../../../constants/breakpoints";

interface IBlock {
  children?: React.ReactNode;
  isolateOuter?: boolean;
  isolateInner?: boolean;
}

const Block = ({children, isolateOuter = false, isolateInner = false}: IBlock):any => {

  let component = children;

  if(!component) return null;

  if( isolateInner ){
    component = (
      <Isolation>
        {component}
      </Isolation>
    )
  }

  component = (
    <Container>
      <Row>
        <Col xs={12}>
          {component}
        </Col>
      </Row>
    </Container>
  )

  if( isolateOuter ) {
    component = (
      <Isolation>
        {component}
      </Isolation>
    )
  }

  return component;
}

const Isolation = styled.div`
  margin-top: 60px;
  padding-bottom: 60px;
  border-top: 1px solid ${Colors.BORDER_PRIMARY};
  border-bottom: 1px solid ${Colors.BORDER_PRIMARY};
  
  @media(${BREAKPOINTS.TILL_MD}){
    margin-top: 40px;
    padding-bottom: 40px;
  }
`

export default Block