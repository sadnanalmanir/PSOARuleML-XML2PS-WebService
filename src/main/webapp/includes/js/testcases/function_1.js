var Example4_21 = [
             '<?xml version=\"1.0\" encoding=\"UTF-8\"?>',
             '',
             '<!-- ',
             '  http://wiki.ruleml.org/index.php/PSOA_RuleML#Function_1',
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
'            <Var>x</Var>',
'          </declare>',
'          <formula>',           
'            <Equal>',               
'              <left>',
'                <Expr>',
'                  <op>',
'                    <Rel type="&psoa;local">identity</Rel>',
'                  </op>',
'                  <Tuple>',
'                    <Var>x</Var>',
'                  </Tuple>',
'                </Expr>',
'              </left>',
'              <right>',
'                <Var>x</Var>',
'              </right>',
'            </Equal>',              
'         </formula>',
'       </Forall>',
'      </sentence>',
'    </Group>',
'  </payload>',
'</Document>'].join('\n');