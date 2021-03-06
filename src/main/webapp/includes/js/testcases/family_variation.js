var Example4_7= [
             '<?xml version=\"1.0\" encoding=\"UTF-8\"?>',
             '',
             '<!-- ',
             '  http://wiki.ruleml.org/index.php/PSOA_RuleML#Family_.28Variation.29',
             '-->',
             '',
             '<!DOCTYPE Document [',
             '<!ENTITY psoa  \"http://psoa.ruleml.org/lang/spec#\">',
             '<!ENTITY xs   \"http://www.w3.org/2001/XMLSchema#\">',
             '<!ENTITY rdf  \"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">',
             ']>',
             '',
             '<Document xmlns=\"&psoa;\">',
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
'          <formula>',
'            <Implies>',
'              <if>',
'                <Exists>',
'                  <declare>',
'                    <Var>obj2</Var>',
'                  </declare>',
'                  <formula>',
'                    <Atom>',
'                      <oid>',
'                        <Var>obj2</Var>',
'                      </oid>',
'                      <op>',
'                        <Rel type=\"&psoa;local\">married</Rel>',
'                      </op>',
'                      <Tuple>',
'                        <Var>Hu</Var>',
'                        <Var>Wi</Var>',
'                      </Tuple>',
'                    </Atom>',
'                  </formula>',
'                </Exists>',
'              </if>',
'              <then>',
'                <Exists>',
'                  <declare>',
'                    <Var>obj1</Var>',
'                  </declare>',
'                  <formula>',
'                    <Atom>',
'                      <oid>',
'                        <Var>obj1</Var>',
'                      </oid>',
'                      <op>',
'                        <Rel type=\"&psoa;local\">family</Rel>',
'                      </op>',
'                      <slot>',
'                        <Ind type=\"&psoa;local\">husb</Ind>',
'                        <Var>Hu</Var>',
'                      </slot>',
'                      <slot>',
'                        <Ind type=\"&psoa;local\">wife</Ind>',
'                        <Var>Wi</Var>',
'                      </slot>',
'                    </Atom>',
'                  </formula>',
'                </Exists>',
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
'          <declare>',
'            <Var>o</Var>',
'          </declare>',
'          <formula>',
'            <Implies>',
'              <if>',
'                <And>',
'                  <formula>',
'                    <Atom>',
'                      <oid>',
'                        <Var>o</Var>',
'                      </oid>',
'                      <op>',
'                        <Rel type=\"&psoa;local\">family</Rel>',
'                      </op>',
'                      <slot>',
'                        <Ind type=\"&psoa;local\">husb</Ind>',
'                        <Var>Hu</Var>',
'                      </slot>',
'                      <slot>',
'                        <Ind type=\"&psoa;local\">wife</Ind>',
'                        <Var>Wi</Var>',
'                      </slot>',
'                    </Atom>',
'                  </formula>',
'                  <formula>',
'                    <Exists>',
'                      <declare>',
'                        <Var>obj3</Var>',
'                      </declare>',
'                      <formula>',
'                        <Atom>',
'                          <oid>',
'                            <Var>obj3</Var>',
'                          </oid>',
'                          <op>',
'                            <Rel type=\"&psoa;local\">kid</Rel>',
'                          </op>',
'                          <Tuple>',
'                            <Var>Hu</Var>',
'                            <Var>Ch</Var>',
'                          </Tuple>',
'                        </Atom>',
'                      </formula>',
'                    </Exists>',
'                  </formula>',
'                </And>',
'              </if>',
'              <then>',
'                <Atom>',
'                  <oid>',
'                    <Var>o</Var>',
'                  </oid>',
'                  <op>',
'                    <Rel type=\"&psoa;local\">family</Rel>',
'                  </op>',
'                  <slot>',
'                    <Ind type=\"&psoa;local\">child</Ind>',
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
'          <declare>',
'            <Var>o</Var>',
'          </declare>',
'          <formula>',
'            <Implies>',
'              <if>',
'                <And>',
'                  <formula>',
'                    <Atom>',
'                      <oid>',
'                        <Var>o</Var>',
'                      </oid>',
'                      <op>',
'                        <Rel type=\"&psoa;local\">family</Rel>',
'                      </op>',
'                      <slot>',
'                        <Ind type=\"&psoa;local\">husb</Ind>',
'                        <Var>Hu</Var>',
'                      </slot>',
'                      <slot>',
'                        <Ind type=\"&psoa;local\">wife</Ind>',
'                        <Var>Wi</Var>',
'                      </slot>',
'                    </Atom>',
'                  </formula>',
'                  <formula>',
'                    <Exists>',
'                      <declare>',
'                        <Var>obj4</Var>',
'                      </declare>',
'                      <formula>',
'                        <Atom>',
'                          <oid>',
'                            <Var>obj4</Var>',
'                          </oid>',
'                          <op>',
'                            <Rel type=\"&psoa;local\">kid</Rel>',
'                          </op>',
'                          <Tuple>',
'                            <Var>Wi</Var>',
'                            <Var>Ch</Var>',
'                          </Tuple>',
'                        </Atom>',
'                      </formula>',
'                    </Exists>',
'                  </formula>',
'                </And>',
'              </if>',
'              <then>',
'                <Atom>',
'                  <oid>',
'                    <Var>o</Var>',
'                  </oid>',
'                  <op>',
'                    <Rel type=\"&psoa;local\">family</Rel>',
'                  </op>',
'                  <slot>',
'                    <Ind type=\"&psoa;local\">child</Ind>',
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
'          <oid>',
'            <Ind type=\"&psoa;local\">m1</Ind>',
'          </oid>',
'          <op>',
'            <Rel type=\"&psoa;local\">married</Rel>',
'          </op>',
'          <Tuple>',
'            <Ind type=\"&psoa;local\">Joe</Ind>',
'            <Ind type=\"&psoa;local\">Sue</Ind>',
'          </Tuple>',
'        </Atom>',
'      </sentence>',
'      <sentence>',
'        <Atom>',
'          <oid>',
'            <Ind type=\"&psoa;local\">k1</Ind>',
'          </oid>',
'          <op>',
'            <Rel type=\"&psoa;local\">kid</Rel>',
'          </op>',
'          <Tuple>',
'            <Ind type=\"&psoa;local\">Sue</Ind>',
'            <Ind type=\"&psoa;local\">Pete</Ind>',
'          </Tuple>',
'        </Atom>',
'      </sentence>',
'      <sentence>',
'        <Atom>',
'          <oid>',
'            <Ind type=\"&psoa;local\">k2</Ind>',
'          </oid>',
'          <op>',
'            <Rel type=\"&psoa;local\">kid</Rel>',
'          </op>',
'          <Tuple>',
'            <Ind type=\"&psoa;local\">Joe</Ind>',
'            <Ind type=\"&psoa;local\">Tom</Ind>',
'          </Tuple>',
'        </Atom>',
'      </sentence>',
'    </Group>',
'  </payload>',
'</Document>'].join('\n');