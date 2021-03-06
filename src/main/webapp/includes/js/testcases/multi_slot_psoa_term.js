var Example4_2 = [
             '<?xml version=\"1.0\" encoding=\"UTF-8\"?>',
             '',
             '<!-- ',
             '  http://wiki.ruleml.org/index.php/PSOA_RuleML#Multi-slot_psoa_term',
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
             '       <Atom xmlns=\"&psoa;\">',          
             '          <oid>',
             '            <Ind type=\"&psoa;local\">o1</Ind>',
             '          </oid>',
             '          <op>',
             '            <Rel type=\"&psoa;local\">p</Rel>',
             '          </op>',          
             '          <slot>',
             '            <Ind type=\"&psoa;local\">a</Ind>',
             '            <Ind type=\"&xs;integer\">1</Ind>',
             '          </slot>',
             '          <slot>',
             '            <Ind type=\"&psoa;local\">b</Ind>',
             '            <Ind type=\"&xs;integer\">2</Ind>',
             '          </slot>',
             '        </Atom>',
             '      </sentence>',
             '    </Group>',
             '  </payload>',
             '</Document>'].join('\n');