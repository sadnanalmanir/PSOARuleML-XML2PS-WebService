/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Example4_6_non_objectified = ['<?xml version=\"1.0" encoding=\"UTF-8"?>',
'',
'<!-- ',
'    http://wiki.ruleml.org/index.php/PSOA_RuleML#Family_.28TBD.29',
'-->',
'',
'<!DOCTYPE Document [',
'<!ENTITY psoa  "http://psoa.ruleml.org/lang/spec#\">',
'<!ENTITY xs   "http://www.w3.org/2001/XMLSchema#\">',
'<!ENTITY rdf  "http://www.w3.org/1999/02/22-rdf-syntax-ns#\">',
']>',
'<Document xmlns="&psoa;">',
'  <payload>',
'    <Group>',
'      <sentence>',
'        <Forall>',
'          <declare>',
'            <Var>Hu</Var>',
'          </declare>',
'          <declare>',
'            <Var>Wi</Var>',
'          </declare>',
'          <declare>',
'            <Var>Ch</Var>',
'          </declare>',
'          <formula>',
'            <Implies>',
'              <if>',
'                <And>',
'                  <formula>                    ',
'                    <Atom>                    ',
'                      <op>',
'                        <Rel type="&psoa;local">married</Rel>',
'                      </op>',
'                      <Tuple>',
'                        <Var>Hu</Var>',
'                        <Var>Wi</Var>',
'                      </Tuple>',
'                    </Atom>                    ',
'                  </formula>',
'                  <formula>                    ',
'                    <Atom>',
'                      <op>',
'                        <Rel type="&psoa;local">kid</Rel>',
'                      </op>',
'                      <Tuple>',
'                        <Var>Hu</Var>',
'                        <Var>Ch</Var>',
'                      </Tuple>',
'                    </Atom>',
'                  </formula>',
'                </And>',
'              </if>',
'              <then>',
'                <Atom>',
'                  <op>',
'                    <Rel type="&psoa;local">family</Rel>',
'                  </op>',
'                  <slot>',
'                    <Ind type="&psoa;local">husb</Ind>',
'                    <Var>Hu</Var>',
'                  </slot>',
'                  <slot>',
'                    <Ind type="&psoa;local">wife</Ind>',
'                    <Var>Wi</Var>',
'                  </slot>',
'                  <slot>',
'                    <Ind type="&psoa;local">child</Ind>',
'                    <Var>Ch</Var>',
'                  </slot>',
'                </Atom>',
'              </then>',
'            </Implies>',
'          </formula>',
'        </Forall>',
'      </sentence>',
'      <sentence>',
'        <Forall>',
'          <declare>',
'            <Var>Hu</Var>',
'          </declare>',
'          <declare>',
'            <Var>Wi</Var>',
'          </declare>',
'          <declare>',
'            <Var>Ch</Var>',
'          </declare>',
'          <formula>',
'            <Implies>',
'              <if>',
'                <And>',
'                  <formula>                    ',
'                    <Atom>                    ',
'                      <op>',
'                        <Rel type="&psoa;local">married</Rel>',
'                      </op>',
'                      <Tuple>',
'                        <Var>Hu</Var>',
'                        <Var>Wi</Var>',
'                      </Tuple>',
'                    </Atom>                    ',
'                  </formula>',
'                  <formula>                    ',
'                    <Atom>',
'                      <op>',
'                        <Rel type="&psoa;local">kid</Rel>',
'                      </op>',
'                      <Tuple>',
'                        <Var>Wi</Var>',
'                        <Var>Ch</Var>',
'                      </Tuple>',
'                    </Atom>',
'                  </formula>',
'                </And>',
'              </if>',
'              <then>',
'                <Atom>',
'                  <op>',
'                    <Rel type="&psoa;local">family</Rel>',
'                  </op>',
'                  <slot>',
'                    <Ind type="&psoa;local">husb</Ind>',
'                    <Var>Hu</Var>',
'                  </slot>',
'                  <slot>',
'                    <Ind type="&psoa;local">wife</Ind>',
'                    <Var>Wi</Var>',
'                  </slot>',
'                  <slot>',
'                    <Ind type="&psoa;local">child</Ind>',
'                    <Var>Ch</Var>',
'                  </slot>',
'                </Atom>',
'              </then>',
'            </Implies>',
'          </formula>',
'        </Forall>',
'      </sentence>',
'      <sentence>',
'        <Atom>',
'          <op>',
'            <Rel type="&psoa;local">married</Rel>',
'          </op>',
'          <Tuple>',
'            <Ind type="&psoa;local">Joe</Ind>',
'            <Ind type="&psoa;local">Sue</Ind>',
'          </Tuple>',
'        </Atom>',
'      </sentence>',
'      <sentence>',
'        <Atom>',
'          <op>',
'            <Rel type="&psoa;local">kid</Rel>',
'          </op>',
'          <Tuple>',
'            <Ind type="&psoa;local">Sue</Ind>',
'            <Ind type="&psoa;local">Pete</Ind>',
'          </Tuple>',
'        </Atom>',
'      </sentence>',
'    </Group>',
'  </payload>',
'</Document>'].join('\n');