Person = Struct.new(:name, :song_name, :song_url)

people = []

people.push Person.new("タルモト", "Lover come back to me", "https://app.box.com/s/d05mcltej9aquf2w7h28zm1odh6j6hc4")
people.push Person.new("taketake", "シナプス", "https://app.box.com/s/ny6uup722hzo6bf74ol3ihv1570sya1p")
people.push Person.new("あまね", "Sound Recruiting", "https://app.box.com/s/he4m72x5ya2k1hi6zburqbbi23109avm")

template = File.open('remix.txt').read

people.each do |person|
  a = template.gsub(/xx/, person.name)
  a.gsub!(/{song}/, "曲名: #{person.song_name}\n音源データ: #{person.song_url}")
  puts a
  File.write("dist/#{person.name}.txt", a)
end
