package org.ruleml.psoa.restful.resources;

import org.jboss.resteasy.logging.Logger;
import org.ruleml.psoa.absyntax.DefaultAbstractSyntax;
import org.ruleml.psoa.parser.Parser;
import org.ruleml.psoa.restful.models.PSOARulebaseRequest;

import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;
import java.io.File;
import java.io.FileOutputStream;
import java.net.URLDecoder;

/**
 * This class retrieves the PSOA RuleML/XML rule base sent over the web,
 * parses it against the Schemas of Condition language and Rule language,
 * creates Abstract Syntax Objects and renders in its equivalent
 * Presentation Syntax based on the PSOA RuleML API.
 */
@Path("/convertPsoaRuleMLXML2PsoaPS")
public class PSOARuleMLXML2PSSyntax {

    Logger logger = Logger.getLogger(PSOARuleMLXML2PSSyntax.class);
    @Context
    UriInfo info;

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    @Encoded
    public String translateSentences(PSOARulebaseRequest req) {

        logger.info("Retrieving the PSOA RuleML/XML rulebase ...");
        String kb = decode(req.getrulemlxmlRulebase());
        logger.info("PSOA RuleML/XML rulebase \n" + kb);
        try {

            File f = File.createTempFile("temp", ".txt");
            logger.info("temporarily string the rulebase in file " + f.getPath());
            FileOutputStream fos = new FileOutputStream(f);
            fos.write(kb.getBytes());
            logger.info("Initializing the factory for creating Abstract Syntax Objects.");
            org.ruleml.psoa.absyntax.DefaultAbstractSyntax absSynFactory
                    = new DefaultAbstractSyntax();
            logger.info("Initializing the JAXB parser to parse the rulebase against the schemas.");
            org.ruleml.psoa.parser.Parser p = new Parser();
            org.ruleml.psoa.absyntax.DefaultAbstractSyntax.Document doc = (org.ruleml.psoa.absyntax.DefaultAbstractSyntax.Document) p.parse(f, absSynFactory);
            logger.info("PSOA document in Presentation Syntax created.");
            System.out.println(doc.toString("  "));
            logger.info("All done");
            return doc.toString("  ");
        } catch (Exception e) {
            logger.info("Error in converting from PSOA RuleML/XML Syntax to the Presentation Syntax");
            e.printStackTrace();
            kb = e.getMessage();
        }

        return kb;
    }

    @SuppressWarnings("deprecation")
    private static String decode(String s) {
        return URLDecoder.decode(s.replace("&gt;", ">"));
    }
}
