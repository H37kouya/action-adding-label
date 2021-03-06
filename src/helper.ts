import * as core from "@actions/core";
import { getOctokit, context as GitHubContext } from "@actions/github"

export const addLabels = async (
    client: ReturnType<typeof getOctokit>,
    prNumber: number,
    labels: string[]
) => {
    await client.issues.addLabels({
      owner: GitHubContext.repo.owner,
      repo: GitHubContext.repo.repo,
      issue_number: prNumber,
      labels: labels
    });
}

export const getPrNumber = (): number | undefined => {
    const pullRequest = GitHubContext.payload.pull_request
    if (!pullRequest) {
      return undefined;
    }

    return pullRequest.number;
}