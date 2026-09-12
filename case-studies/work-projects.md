# Work projects — Kirill Kuznetsov

Three projects created and integrated into business workflows. My role covered implementation and workflow integration. These are work-project case studies; the synthetic demonstration projects elsewhere in my portfolio are separate.

## Address normalization

**Problem.** Inconsistent address strings make reference matching and downstream reporting difficult.

**Solution.** A Python engine separates region, administrative area, locality, street and building components; applies configurable YAML rules; and compares the result with an address reference. It exports normalized components, matching method, parsing comments and data-quality review fields to Excel. The codebase includes in-memory reference indexes, SQLite lookup support, bounded caches and timing diagnostics.

**My contribution.** Created the processing solution and integrated it into data-preparation workflows.

**Implementation review.** A reviewed copy fixes optional-reference initialization, missing-reference errors, village-versus-building parsing, cross-region reference matches, and empty results. Five offline tests cover these boundaries and an Excel-to-Excel run. No claim of population-wide address accuracy is made.

**Technologies:** Python, pandas, openpyxl, YAML, SQLite, regular expressions.

## Supplier report processing

**Problem.** Supplier Excel reports use different headers, hierarchies and field names, while downstream imports require a consistent layout and controlled processing status.

**Solution.** A configurable ETL pipeline selects supplier rules, reads single or multirow headers, handles outline groups, maps fields, converts values, fills registry metadata, filters rows and checks required fields. It produces template-based Excel output. SQL Server registry reads and staged JSON status commands connect the pipeline to a 1C workflow. The existing Windows integration supports legacy XLS conversion through Excel COM.

**My contribution.** Created the pipeline and integrated it into report-preparation and import workflows.

**Implementation review.** The reviewed copy prevents dry runs from producing 1C status commands, detects blank required fields, counts errors by row rather than index label, and prevents hierarchy values from crossing parent-group boundaries. Six offline tests cover these behaviors, metadata preservation and an Excel-to-template run.

**Technologies:** Python, pandas, YAML, Microsoft SQL Server, Excel, JSON, 1C integration.

## 2GIS district enrichment

**Problem.** Address datasets need administrative-district information and a traceable record of lookup outcomes.

**Solution.** A Python and Playwright workflow reads addresses from Excel, searches 2GIS, extracts district and address text, records source URLs and processing status, and writes an enriched workbook. It includes fallback queries, diagnostic artifacts and CAPTCHA detection.

**My contribution.** Created the lookup workflow and integrated it into address-data processing.

**Implementation review.** The reviewed source fixes default-sheet loading, missing-address handling, output workbook extension and destructive debug-folder initialization. Four offline regression tests exercise file handling and output persistence with the network search replaced by a test double.

**Technologies:** Python, Playwright, pandas, openpyxl, Excel.

## Verification scope

September 2026: 18 focused local tests passed on the reviewed copies, including SQLite lookup checks and concurrent JSON publication. Tests use synthetic inputs. They are regression checks, not production performance benchmarks. Live SQL Server/1C and Windows Excel COM were not validated in this review. A subsequent live-browser check of 2GIS exposed outdated suggestion selectors and district labels without the keyword expected by the parser. The current automated lookup therefore needs adaptation before production use. The four parser tests validate file handling, not live lookup correctness. Integration testing is required before deploying the changes.

Client datasets, internal infrastructure paths and production configuration are excluded from these public descriptions. No client savings, throughput or accuracy figures are asserted.
