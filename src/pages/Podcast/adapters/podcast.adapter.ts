import { IPodcast } from "../interfaces/podcast.interface"

/**
 * 
 * @param payload 
 * @returns episodes
 * @description: object-joining all episodes of a podcast
 */
const parseEpisodes = (payload: any) => {

  return Object.fromEntries(payload.map((t: any) => {
    if (t.elements) {
      return [t.name, t.elements[0].text || t.elements[0].cdata]
    } else {
      return [t.name, t.attributes]
    }
  }))
}


/**
 * 
 * @param payload 
 * @returns podcast
 * @description: splits and builds a new podcast array, object-joining all episodes of a podcast
 */
const parsePodcastDetail = (payload: any) => {

  const podcast: IPodcast = {
    episodes: []
  };

  // eslint-disable-next-line array-callback-return
  payload.elements[0].elements[0].elements.map((pod: any) => {

    pod.name === 'title' && (podcast['title'] = pod.elements[0].text);

    pod.name === 'itunes:author' && (podcast['author'] = pod.elements[0].text);

    pod.name === "image" && (podcast['image'] = pod.elements[0].elements[0].text)

    pod.name === 'description' && (podcast['description'] = pod.elements[0].text || pod.elements[0].cdata)

    pod.name === 'itunes:subtitle' && (podcast['subtitle'] = pod.elements[0].text)

    if (pod.type === 'element' && pod.name === 'item') {
      podcast['episodes'] = [
        ...podcast.episodes,
        parseEpisodes(pod.elements)
      ]
    }
  })


  return podcast
}


export {
  parseEpisodes,
  parsePodcastDetail
}