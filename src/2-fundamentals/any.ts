let sales: number = 123_456_789
let course: string = 'TypeScript'
let isPublished: boolean = true
let level

/**
 * We're getting an error that TypeScript is trying to infer the type of the parameter.
 * Let's say, this is part of a JavaScript project that we're tyring to convert to TypeScript.
 * And at this point, it's impossible for us to explicitly annotate the param w/ a particular type.
 * To turn off the error:
 *   (1) Annotate it with any.
 * But what if we have tons of errors of this kind. We don't want to go to every function, and
 * explicitly annotate various parameters with any.
 *   (2) In Type Checking section of tsconfig.json, set noImplicitAny to false. Use this only if you
 *       know what you're doing. Otherwise, there's really no point in using TypeScript because
 *       you'll loose the major benefits of TypeScript.
 */
function renderAnyDocument(document: any) {
  console.log(document)
}
