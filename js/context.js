/*!
 * Copyright (c) 2022 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

module.exports = {
  "@context": {
    "odrl": "http://www.w3.org/ns/odrl/2/",
    "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "owl": "http://www.w3.org/2002/07/owl#",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "dct": "http://purl.org/dc/terms/",
    "xsd": "http://www.w3.org/2001/XMLSchema#",
    "vcard": "http://www.w3.org/2006/vcard/ns#",
    "foaf": "http://xmlns.com/foaf/0.1/",
    "schema": "http://schema.org/",
    "cc": "http://creativecommons.org/ns#",
    "uid": "@id",
    "type": "@type",
    "Policy": "odrl:Policy",
    "Rule": "odrl:Rule",
    "profile": {
      "@type": "@id",
      "@id": "odrl:profile"
    },
    "inheritFrom": {
      "@type": "@id",
      "@id": "odrl:inheritFrom"
    },
    "ConflictTerm": "odrl:ConflictTerm",
    "conflict": {
      "@type": "@vocab",
      "@id": "odrl:conflict"
    },
    "perm": "odrl:perm",
    "prohibit": "odrl:prohibit",
    "invalid": "odrl:invalid",
    "Agreement": "odrl:Agreement",
    "Assertion": "odrl:Assertion",
    "Offer": "odrl:Offer",
    "Privacy": "odrl:Privacy",
    "Request": "odrl:Request",
    "Set": "odrl:Set",
    "Ticket": "odrl:Ticket",
    "Asset": "odrl:Asset",
    "AssetCollection": "odrl:AssetCollection",
    "relation": {
      "@type": "@id",
      "@id": "odrl:relation"
    },
    "hasPolicy": {
      "@type": "@id",
      "@id": "odrl:hasPolicy"
    },
    "target": {
      "@type": "@id",
      "@id": "odrl:target"
    },
    "output": {
      "@type": "@id",
      "@id": "odrl:output"
    },
    "partOf": {
      "@type": "@id",
      "@id": "odrl:partOf"
    },
    "source": {
      "@type": "@id",
      "@id": "odrl:source"
    },
    "Party": "odrl:Party",
    "PartyCollection": "odrl:PartyCollection",
    "function": {
      "@type": "@vocab",
      "@id": "odrl:function"
    },
    "PartyScope": "odrl:PartyScope",
    "assignee": {
      "@type": "@id",
      "@id": "odrl:assignee"
    },
    "assigner": {
      "@type": "@id",
      "@id": "odrl:assigner"
    },
    "assigneeOf": {
      "@type": "@id",
      "@id": "odrl:assigneeOf"
    },
    "assignerOf": {
      "@type": "@id",
      "@id": "odrl:assignerOf"
    },
    "attributedParty": {
      "@type": "@id",
      "@id": "odrl:attributedParty"
    },
    "attributingParty": {
      "@type": "@id",
      "@id": "odrl:attributingParty"
    },
    "compensatedParty": {
      "@type": "@id",
      "@id": "odrl:compensatedParty"
    },
    "compensatingParty": {
      "@type": "@id",
      "@id": "odrl:compensatingParty"
    },
    "consentingParty": {
      "@type": "@id",
      "@id": "odrl:consentingParty"
    },
    "consentedParty": {
      "@type": "@id",
      "@id": "odrl:consentedParty"
    },
    "informedParty": {
      "@type": "@id",
      "@id": "odrl:informedParty"
    },
    "informingParty": {
      "@type": "@id",
      "@id": "odrl:informingParty"
    },
    "trackingParty": {
      "@type": "@id",
      "@id": "odrl:trackingParty"
    },
    "trackedParty": {
      "@type": "@id",
      "@id": "odrl:trackedParty"
    },
    "contractingParty": {
      "@type": "@id",
      "@id": "odrl:contractingParty"
    },
    "contractedParty": {
      "@type": "@id",
      "@id": "odrl:contractedParty"
    },
    "Action": "odrl:Action",
    "action": {
      "@type": "@vocab",
      "@id": "odrl:action"
    },
    "includedIn": {
      "@type": "@id",
      "@id": "odrl:includedIn"
    },
    "implies": {
      "@type": "@id",
      "@id": "odrl:implies"
    },
    "Permission": "odrl:Permission",
    "permission": {
      "@type": "@id",
      "@id": "odrl:permission"
    },
    "Prohibition": "odrl:Prohibition",
    "prohibition": {
      "@type": "@id",
      "@id": "odrl:prohibition"
    },
    "obligation": {
      "@type": "@id",
      "@id": "odrl:obligation"
    },
    "use": "odrl:use",
    "grantUse": "odrl:grantUse",
    "aggregate": "odrl:aggregate",
    "annotate": "odrl:annotate",
    "anonymize": "odrl:anonymize",
    "archive": "odrl:archive",
    "concurrentUse": "odrl:concurrentUse",
    "derive": "odrl:derive",
    "digitize": "odrl:digitize",
    "display": "odrl:display",
    "distribute": "odrl:distribute",
    "execute": "odrl:execute",
    "extract": "odrl:extract",
    "give": "odrl:give",
    "index": "odrl:index",
    "install": "odrl:install",
    "modify": "odrl:modify",
    "move": "odrl:move",
    "play": "odrl:play",
    "present": "odrl:present",
    "print": "odrl:print",
    "read": "odrl:read",
    "reproduce": "odrl:reproduce",
    "sell": "odrl:sell",
    "stream": "odrl:stream",
    "textToSpeech": "odrl:textToSpeech",
    "transfer": "odrl:transfer",
    "transform": "odrl:transform",
    "translate": "odrl:translate",
    "Duty": "odrl:Duty",
    "duty": {
      "@type": "@id",
      "@id": "odrl:duty"
    },
    "consequence": {
      "@type": "@id",
      "@id": "odrl:consequence"
    },
    "remedy": {
      "@type": "@id",
      "@id": "odrl:remedy"
    },
    "acceptTracking": "odrl:acceptTracking",
    "attribute": "odrl:attribute",
    "compensate": "odrl:compensate",
    "delete": "odrl:delete",
    "ensureExclusivity": "odrl:ensureExclusivity",
    "include": "odrl:include",
    "inform": "odrl:inform",
    "nextPolicy": "odrl:nextPolicy",
    "obtainConsent": "odrl:obtainConsent",
    "reviewPolicy": "odrl:reviewPolicy",
    "uninstall": "odrl:uninstall",
    "watermark": "odrl:watermark",
    "Constraint": "odrl:Constraint",
    "LogicalConstraint": "odrl:LogicalConstraint",
    "constraint": {
      "@type": "@id",
      "@id": "odrl:constraint"
    },
    "refinement": {
      "@type": "@id",
      "@id": "odrl:refinement"
    },
    "Operator": "odrl:Operator",
    "operator": {
      "@type": "@vocab",
      "@id": "odrl:operator"
    },
    "RightOperand": "odrl:RightOperand",
    "rightOperand": "odrl:rightOperand",
    "rightOperandReference": {
      "@type": "xsd:anyURI",
      "@id": "odrl:rightOperandReference"
    },
    "LeftOperand": "odrl:LeftOperand",
    "leftOperand": {
      "@type": "@vocab",
      "@id": "odrl:leftOperand"
    },
    "unit": "odrl:unit",
    "dataType": {
      "@type": "xsd:anyType",
      "@id": "odrl:datatype"
    },
    "status": "odrl:status",
    "absolutePosition": "odrl:absolutePosition",
    "absoluteSpatialPosition": "odrl:absoluteSpatialPosition",
    "absoluteTemporalPosition": "odrl:absoluteTemporalPosition",
    "absoluteSize": "odrl:absoluteSize",
    "count": "odrl:count",
    "dateTime": "odrl:dateTime",
    "delayPeriod": "odrl:delayPeriod",
    "deliveryChannel": "odrl:deliveryChannel",
    "elapsedTime": "odrl:elapsedTime",
    "event": "odrl:event",
    "fileFormat": "odrl:fileFormat",
    "industry": "odrl:industry:",
    "language": "odrl:language",
    "media": "odrl:media",
    "meteredTime": "odrl:meteredTime",
    "payAmount": "odrl:payAmount",
    "percentage": "odrl:percentage",
    "product": "odrl:product",
    "purpose": "odrl:purpose",
    "recipient": "odrl:recipient",
    "relativePosition": "odrl:relativePosition",
    "relativeSpatialPosition": "odrl:relativeSpatialPosition",
    "relativeTemporalPosition": "odrl:relativeTemporalPosition",
    "relativeSize": "odrl:relativeSize",
    "resolution": "odrl:resolution",
    "spatial": "odrl:spatial",
    "spatialCoordinates": "odrl:spatialCoordinates",
    "systemDevice": "odrl:systemDevice",
    "timeInterval": "odrl:timeInterval",
    "unitOfCount": "odrl:unitOfCount",
    "version": "odrl:version",
    "virtualLocation": "odrl:virtualLocation",
    "eq": "odrl:eq",
    "gt": "odrl:gt",
    "gteq": "odrl:gteq",
    "lt": "odrl:lt",
    "lteq": "odrl:lteq",
    "neq": "odrl:neg",
    "isA": "odrl:isA",
    "hasPart": "odrl:hasPart",
    "isPartOf": "odrl:isPartOf",
    "isAllOf": "odrl:isAllOf",
    "isAnyOf": "odrl:isAnyOf",
    "isNoneOf": "odrl:isNoneOf",
    "or": "odrl:or",
    "xone": "odrl:xone",
    "and": "odrl:and",
    "andSequence": "odrl:andSequence",
    "policyUsage": "odrl:policyUsage"
  }
}
