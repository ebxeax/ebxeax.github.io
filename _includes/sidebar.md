{% unless site.github%}
{% if page.toc %}
## [目录]({{ '/' | relative_url }})

{{content | toc_only}}
{% endif %}
{% endunless%}

{% comment %}
{% if page.ads %}
## 延伸阅读
<ul>
{% for ad in page.ads %}
  <li>{{ad}}</li>
{% endfor %}
</ul>
{% endif %}
{% endcomment %}

## [订阅RSS]({{ '/feed.xml' | relative_url }})

## [可视化算法]({{ '/JavascriptVisual/Algorithms.html' | relative_url }})

## [关于作者]({{ '/about.html' | relative_url }})

- [GitHub](https://github.com/ebxeax)

<a href="https://clustrmaps.com/site/1brtw"  title="Visit tracker"><img src="//www.clustrmaps.com/map_v2.png?d=vt2oDyb3-1Hm-VYhYiVQsKG6bPetsRVrRQJrQUrwp8E&cl=ffffff" /></a>