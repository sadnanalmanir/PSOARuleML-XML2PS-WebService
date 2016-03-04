package org.ruleml.psoa.restful.resources;

import java.util.HashSet;
import java.util.Set;
import org.jboss.resteasy.logging.Logger;

/**
 * This class initializes the Syntax converter class from
 * which converts PSOA RuleML/XML Rulebase to its equivalent
 * Presentation Syntax.
 */

public class Application extends javax.ws.rs.core.Application {

    Logger logger = Logger.getLogger(Application.class);
    private Set<Object> singletons = new HashSet<Object>();
    private Set<Class<?>> empty = new HashSet<Class<?>>();

    public Application() {
        // initializes the syntax converter class
        this.singletons.add(new PSOARuleMLXML2PSSyntax());
    }

    @Override
    public Set<Class<?>> getClasses() {
        return this.empty;
    }

    @Override
    public Set<Object> getSingletons() {
        return this.singletons;
    }
}
