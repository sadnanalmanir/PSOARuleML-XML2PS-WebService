/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Example4_24 = ['<?xml version=\"1.0" encoding=\"UTF-8"?>',
'',
'<!-- ',
'    http://wiki.ruleml.org/index.php/PSOA_RuleML#Addition_and_Multiplication_.28TBD.29',
'-->',
'',
'<!DOCTYPE Document [',
'<!ENTITY psoa  "http://psoa.ruleml.org/lang/spec#\">',
'<!ENTITY xs   "http://www.w3.org/2001/XMLSchema#\">',
'<!ENTITY rdf  "http://www.w3.org/1999/02/22-rdf-syntax-ns#\">',
']>',
'',
'<Document xmlns="&psoa;">',
'  <payload>',
'    <Group>',
'      <sentence>',
'        <Forall>',
'          <declare>',
'            <Var>x</Var>',
'          </declare>',
'          <declare>',
'            <Var>y</Var>',
'          </declare>',
'          <formula>',
'            <Equal>',
'              <left>',
'                <Expr>',
'                  <op>',
'                    <Rel type="&psoa;local">sum</Rel>',
'                  </op>',
'                  <Tuple>',
'                    <Expr>',
'                      <op>',
'                        <Fun type="&psoa;local">suc</Fun>',
'                      </op>',
'                      <Tuple>',
'                        <Var>x</Var>',
'                      </Tuple>',
'                    </Expr>',
'                    <Var>y</Var>',
'                  </Tuple>',
'                </Expr>',
'              </left>',
'              <right>',
'                <Expr>',
'                  <op>',
'                    <Rel type="&psoa;local">suc</Rel>',
'                  </op>',
'                  <Tuple>',
'                    <Expr>',
'                      <op>',
'                        <Fun type="&psoa;local">sum</Fun>',
'                      </op>',
'                      <Tuple>',
'                        <Var>x</Var>',
'                        <Var>y</Var>',
'                      </Tuple>',
'                    </Expr>',
'                  </Tuple>',
'                </Expr>',
'              </right>',
'            </Equal>',
'          </formula>',
'        </Forall>',
'      </sentence>',
'      <sentence>',
'        <Forall>',
'          <declare>',
'            <Var>x</Var>',
'          </declare>',
'          <formula>',
'            <Equal>',
'              <left>',
'                <Var>x</Var>',
'              </left>',
'              <right>',
'                <Expr>',
'                  <op>',
'                    <Rel type="&psoa;local">sum</Rel>',
'                  </op>',
'                  <Tuple>',
'                    <Ind type="&xs;integer">0</Ind>',
'                    <Var>x</Var>',
'                  </Tuple>',
'                </Expr>',
'              </right>',
'            </Equal>',
'          </formula>',
'        </Forall>',
'      </sentence>',
'      <sentence>',
'        <Forall>',
'          <declare>',
'            <Var>x</Var>',
'          </declare>',
'          <declare>',
'            <Var>y</Var>',
'          </declare>',
'          <formula>',
'            <Equal>',
'              <left>',
'                <Expr>',
'                  <op>',
'                    <Rel type="&psoa;local">multiply</Rel>',
'                  </op>',
'                  <Tuple>',
'                    <Expr>',
'                      <op>',
'                        <Fun type="&psoa;local">suc</Fun>',
'                      </op>',
'                      <Tuple>',
'                        <Var>x</Var>',
'                      </Tuple>',
'                    </Expr>',
'                    <Var>y</Var>',
'                  </Tuple>',
'                </Expr>',
'              </left>',
'              <right>',
'                <Expr>',
'                  <op>',
'                    <Rel type="&psoa;local">sum</Rel>',
'                  </op>',
'                  <Tuple>',
'			  <Var>x</Var>',
'                    <Expr>',
'                      <op>',
'                        <Fun type="&psoa;local">multiply</Fun>',
'                      </op>',
'                      <Tuple>',
'                        <Var>x</Var>',
'                        <Var>y</Var>',
'                      </Tuple>',
'                    </Expr>',
'                  </Tuple>',
'                </Expr>',
'              </right>',
'            </Equal>',
'          </formula>',
'        </Forall>',
'      </sentence>',
'      <sentence>',
'        <Forall>',
'          <declare>',
'            <Var>x</Var>',
'          </declare>',
'          <formula>',
'            <Equal>',
'              <left>',
'                <Ind type="&xs;integer">0</Ind>',
'              </left>',
'              <right>',
'                <Expr>',
'                  <op>',
'                    <Rel type="&psoa;local">sum</Rel>',
'                  </op>',
'                  <Tuple>',
'                    <Ind type="&xs;integer">0</Ind>',
'                    <Var>x</Var>',
'                  </Tuple>',
'                </Expr>',
'              </right>',
'            </Equal>',
'          </formula>',
'        </Forall>',
'      </sentence>',
'    </Group>',
'  </payload>',
'</Document>'].join('\n');