# Request Header Parser Microservice

![Build](https://github.com/ihorsukhorada/request-header-parser-microservice/actions/workflows/build.yml/badge.svg)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=ihorsukhorada_request-header-parser-microservice&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=ihorsukhorada_request-header-parser-microservice)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=ihorsukhorada_request-header-parser-microservice&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=ihorsukhorada_request-header-parser-microservice)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=ihorsukhorada_request-header-parser-microservice&metric=coverage)](https://sonarcloud.io/summary/new_code?id=ihorsukhorada_request-header-parser-microservice)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=ihorsukhorada_request-header-parser-microservice&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=ihorsukhorada_request-header-parser-microservice)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=ihorsukhorada_request-header-parser-microservice&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=ihorsukhorada_request-header-parser-microservice)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=ihorsukhorada_request-header-parser-microservice&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=ihorsukhorada_request-header-parser-microservice)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=ihorsukhorada_request-header-parser-microservice&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=ihorsukhorada_request-header-parser-microservice)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=ihorsukhorada_request-header-parser-microservice&metric=bugs)](https://sonarcloud.io/summary/new_code?id=ihorsukhorada_request-header-parser-microservice)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=ihorsukhorada_request-header-parser-microservice&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=ihorsukhorada_request-header-parser-microservice)

Implemenation of the Request Header Parser Microservice task.

## API

Usage:

```
GET /api/whoami
```

Output:

```
{
    "ipaddress":"159.20.14.100",
    "language":"en-US,en;q=0.5",
    "software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64;rv:50.0) Gecko/20100101 Firefox/50.0"
}
```