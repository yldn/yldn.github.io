module Jekyll
  class ProjectCategoryArchives < Generator
    safe true
    priority :highest

    def generate(site)
      return unless site.collections.key?('projects')

      project_docs = site.collections['projects'].docs
      project_docs.each do |doc|
        categories = Array(doc.data['categories'] || doc.data['category'])
        categories.each do |category|
          next if category.to_s.strip.empty?
          category = category.to_s
          site.categories[category] ||= []
          site.categories[category] << doc unless site.categories[category].include?(doc)
        end

        tags = Array(doc.data['tags'])
        tags.each do |tag|
          next if tag.to_s.strip.empty?
          tag = tag.to_s
          site.tags[tag] ||= []
          site.tags[tag] << doc unless site.tags[tag].include?(doc)
        end
      end
    end
  end
end
