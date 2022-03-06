const iconClassMapping = {
    "HOME": "fa fa-home",
    "GITHUB": "fa fa-github-alt",
    "LINKEDIN": "fa fa-linkedin",
}


export const replaceLinkName = (key) => {
    let s = key.toUpperCase()
    if (iconClassMapping.hasOwnProperty(s)) {
        return iconClassMapping[s];
    } else {
        return key;
    }
}

export const stringIsFaIcon = (s) => {
    return s.substring(0, 3) === "fa ";
  }
