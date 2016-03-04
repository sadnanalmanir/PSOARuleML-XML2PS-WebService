package org.ruleml.psoa.restful.models;

import javax.xml.bind.annotation.XmlRootElement;

/**
 * This class returns the PSOA RuleML/XML rulebase.
 */
@XmlRootElement
public class PSOARulebaseRequest {

    //private String document;
    private String rulemlxmlRulebase;

    public String getrulemlxmlRulebase() {
        //return document;
        return rulemlxmlRulebase;
    }

    public void setrulemlxmlRulebase(String psoaRuleMLXMLDocument) {
        //this.document = psoaRuleMLXMLDocument;
        this.rulemlxmlRulebase = psoaRuleMLXMLDocument;
    }
}
