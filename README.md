#PSOARuleML-XML2PS-WebService

## Overview
PSOARuleML-XML2PS-WebService is a Java Web application  which  warps the [PSOA RuleML API](https://github.com/sadnanalmanir/PSOARuleML-API) for generating the eqiuvalent presentation syntax from PSOA RuleML/XML rulebase. It allows the user to choose any rulebase dynamically from a list of PSOA RuleML/XML rulebases.

## Live Demo

<http://psoa-rulemlapi.rhcloud.com/psoaxml2ps/>

## Check Out and Build from Source
1. Clone the repository from github

  `$ git clone https://github.com/sadnanalmanir/PSOARuleML-XML2PS-WebService.git`

2. Navigate to the cloned repository directory

  `$ cd PSOARuleML-XML2PS-WebService/`

3. Compile the sources

  `$     mvn compile`

4. Generate the archive file

  `$     mvn package`

5. The PSOARuleML-XML2PS-WebService-1.0-SNAPSHOT.war will be created in the /target directory

6. Deploy the war file in your application server

7. The Demo will be running on the specified server

  `http://host:port/PSOARuleML-XML2PS-WebService-1.0-SNAPSHOT/index.html`

## References
* PSOA RuleML: http://wiki.ruleml.org/index.php/PSOA_RuleML
* PSOA RuleML API: http://wiki.ruleml.org/index.php/PSOA_RuleML_API
