/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let l = emails.length, emailHash = {}
    for(let i = 0; i < l; i++) {
        let arr = emails[i].split("@")
        let email = formatLocal(arr[0]) + "@" + arr[1]
        emailHash[email] = true
    }
    return Object.keys(emailHash).length
};

const formatLocal = (str) => {
    return str.split("+")[0].split(".").join("")
}