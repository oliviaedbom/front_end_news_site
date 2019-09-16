export function asyncDocumentReady(callback) {
  if (document.readyState !== 'loading') {
    callback();
    return;
  }
  document.addEventListener('DOMContentLoaded', () => { callback(); });
}

export const milliseconds = {
  fromSeconds(numberOfSeconds) { return numberOfSeconds * 1000; },
  fromMinutes(numberOfMinutes) { return this.fromSeconds(numberOfMinutes * 60); },
};
