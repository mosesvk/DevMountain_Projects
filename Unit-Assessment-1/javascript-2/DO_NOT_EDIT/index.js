/* DO NOT EDIT CODE BELOW */
/* DO NOT EDIT CODE BELOW */
/* DO NOT EDIT CODE BELOW */

const gitDefinitionBlock = document.getElementById('git-definition')
const gitHubDefinitionBlock = document.getElementById('github-definition')
const gitInitBlock = document.getElementById('init-description')
const gitInitCode = document.getElementById('init-code')
const gitCloneCode = document.getElementById('clone-code')
const gitCloneBlock = document.getElementById('clone-description')
const gitStatusBlock = document.getElementById('status-description')
const gitStatusCode = document.getElementById('status-code')
const gitAddBlock = document.getElementById('add-description')
const gitAddCode = document.getElementById('add-code')
const gitCommitBlock = document.getElementById('commit-description')
const gitCommitCode = document.getElementById('commit-code')
const addRemoteBlock = document.getElementById('remote-description')
const addRemoteCode = document.getElementById('remote-code')
const gitPushBlock = document.getElementById('push-description')
const gitPushCode = document.getElementById('push-code')

gitDefinition
  ? (gitDefinitionBlock.innerText = `Git is ${gitDefinition}`)
  : (gitDefinitionBlock.innerText = 'Git is...')
gitHubDefinition
  ? (gitHubDefinitionBlock.innerText = `GitHub is ${gitHubDefinition}`)
  : (gitHubDefinitionBlock.innerText = 'GitHub is...')

formatAnswer(gitInitBlock, gitInitCode, init)
formatAnswer(gitCloneBlock, gitCloneCode, clone)
formatAnswer(gitStatusBlock, gitStatusCode, status)
formatAnswer(gitAddBlock, gitAddCode, add)
formatAnswer(gitCommitBlock, gitCommitCode, commit)
formatAnswer(addRemoteBlock, addRemoteCode, addRemote)
formatAnswer(gitPushBlock, gitPushCode, push)

function formatAnswer(descriptionBlock, codeBlock, answer) {
  answer.description
    ? (descriptionBlock.innerText = `Description: ${answer.description}`)
    : (descriptionBlock.innerText = 'Description:')

  answer ? (codeBlock.innerText = answer.code) : (codeBlock.innerText = '')
}

/* DO NOT EDIT CODE ABOVE */
/* DO NOT EDIT CODE ABOVE */
/* DO NOT EDIT CODE ABOVE */
