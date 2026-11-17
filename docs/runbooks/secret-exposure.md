# Runbook: Suspected Secret Exposure

This application currently has no legitimate need for credentials.

1. Do not paste the suspected secret into an issue or chat.
2. Identify the commit and file path without repeating the secret value.
3. Revoke or rotate the credential with its issuing provider immediately.
4. Remove the value from active source and deployment configuration.
5. Review commit history and logs for exposure.
6. Use GitHub's secret-scanning remediation guidance for history cleanup if required.
7. Verify the replacement is not embedded in public browser code.
8. Record the incident without storing the secret in the report.

Removing a secret from the latest commit does not make an exposed credential safe. Rotation is essential.
