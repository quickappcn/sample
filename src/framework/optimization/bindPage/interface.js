import fetch from '@system.fetch'

export function fetchData (callback) {
  fetch.fetch({
    url: 'https://doc.hapjs.org',
    success: callback
  })
}