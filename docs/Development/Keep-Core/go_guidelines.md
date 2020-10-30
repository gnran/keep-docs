--- 
order: 3
---

# Go Guidelines

Go code generally adheres to the best practices of the Go community. All Go code is formatted using goimports to ensure both adherence with `gofmt's` output, as well as unified organization of imports.

### Max line length

Go code is wrapped at 80 characters per line as a general rule, though some lines may be left longer at the discretion of the developers for clarity. No line should exceed 120 characters in length. When wrapping function calls, each parameter should be on its own line.

### `go vet/go lint`

We vet and lint our code at commit-time. All code should pass both go vet and go lint in their default configurations.

### Deviations

Two major deviations from typical Go practices that are worth calling out:

* We do **not** prefix commit messages with the packages touched by the commit. The commit includes diffs, diffs include paths, paths imply packages. We consider this unnecessary and noisy.

* We **discourage** single-letter variable names and related extra-shortness. Short variable names produce diffs that are more difficult to analyze quickly, and generally result in lower clarity for less experienced developers. We consider this an antipattern, and the additional typed characters to be comparatively very cheap. We make a few exceptions:

     **_External packages_**
    
    We use the package name irrespective of our own practices, unless it introduces ambiguity.

     **_The_** _`err`_ **_variable_**
    
    We use err as is common in Go.

     **_Iteration indices_**
    
    `i`, `j`, etc are well-understood and not domain-specific.  

     **_Method receivers_**
    
    Since Go does not have a standard `this`, we do use the first letter of each word as the variable name of a method receiver (e.g., for a type `MyCoolType`, the method receiver would be named `mct`).

     **_Name clashes_**
    
    If a variable name would clash with the name of a type, e.g. a variable of type `magic` whose name would naturally be `magic`, the last vowel may be dropped to achieve a unique name.

### Testing

There are a few common patterns for testing in the Keep codebase:

* Table-driven tests. Any case where a function needs to verify multiple cases are generally structured as table-driven tests. There is a very short page on table-driven testing on the [Go wiki](https://github.com/golang/go/wiki/TableDrivenTests).

* Carefully aligned error output. Generally all tests that call `Errorf` should provide a clear expected-vs-actual output stacked and aligned to make it trivial to spot differences. This is typically represented as a call like: `t.Errorf("\nexpected: [%v]\nactual: [%v]\n", expected, actual)`. This aligns the expected and actual on top of each other. The context of the error should be clear from the test or subtest’s name, but if some additional information is deemed useful, it can be included before the initial newline. See [pkg/internal/testutils](https://github.com/keep-network/keep-core/tree/master/pkg/internal/testutils) for an example of an assert helper that uses this style.